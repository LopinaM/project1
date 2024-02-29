import "./App.css";
import React from "react";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import Settings from "./components/Settings/Settings.tsx";
import News from "./components/News/News";
import {
  HashRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
  withRouter,
} from "react-router-dom";
// import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { compose } from "redux";
import { connect, Provider } from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";
import { initializeApp } from "./redux/app-reducer";
import store from "./redux/redux-store";

import { withSuspense } from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);

const DialogContainerWithSuspense = withSuspense(DialogsContainer);
const ProfileContainerWithSuspense = withSuspense(ProfileContainer);

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="app-wrapper">
        {/* <BrowserRouter > */}

        <HeaderContainer />
        <Navbar />

        <div className="app-wrapper-content">
          <Routes>
            {/* <Route path="/profile" element={<ProfileContainer />}>
              <Route path=":userId" element={<ProfileContainer />} />
            </Route> */}

            <Route
              path="/profile/:userId?"
              element={<ProfileContainerWithSuspense />}
            />

            <Route path="dialogs" element={<DialogContainerWithSuspense />} />

            <Route path="news" element={<News />} />
            <Route path="music" element={<Music />} />
            <Route path="settings" element={<Settings />} />

            <Route path="users" element={<UsersContainer />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </div>

        {/* </BrowserRouter > */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

// export default compose(

//   connect(mapStateToProps, { initializeApp }))(App)

let AppContainer = compose(
  // withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const SamuraiJSApp = (props) => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
};

export default SamuraiJSApp;
