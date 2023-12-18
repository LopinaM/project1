import './App.css';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';


function App(props) {
  debugger
  return (
    <div className='app-wrapper'>
      <BrowserRouter >

        <HeaderContainer />
        <Navbar />
        {/* <Navbar state={props.state.friendsPage.friendsData} /> */}
        <div className='app-wrapper-content'>
          <Routes>

            {/* <Route path="/profile" element={<ProfileContainer />}>
              <Route path=":userId" element={<ProfileContainer />} />
            </Route> */}

            <Route path='/profile/:userId?' element={<ProfileContainer />} />

            <Route path="dialogs" element={<DialogsContainer />} />

            <Route path="news" element={<News />} />
            <Route path="music" element={<Music />} />
            <Route path="settings" element={<Settings />} />

            <Route path="users" element={<UsersContainer />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </div>

      </BrowserRouter >
    </div >
  );
}

export default App;
