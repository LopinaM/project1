import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App(props) {

  return (
    <div className='app-wrapper'>
      <BrowserRouter >

        <Header />
        <Navbar />
        {/* <Navbar state={props.state.friendsPage.friendsData} /> */}
        <div className='app-wrapper-content'>
          <Routes>

            <Route path="profile"
              element={<Profile
              // profilePage={props.state.profilePage}
              // dispatch={props.dispatch} 
              // store={props.store} 
              />} />

            <Route path="dialogs"
              element={<DialogsContainer
              // state={props.state.dialogsPage} 
              // store={props.store} 
              />} />

            <Route path="news" element={<News />} />
            <Route path="music" element={<Music />} />
            <Route path="settings" element={<Settings />} />

            <Route path="friends" element={<Friends
            // state={props.state.friendsPage}
            />} />
          </Routes>
        </div>

      </BrowserRouter >
    </div >
  );
}

export default App;
