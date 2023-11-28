import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Navbar />} >
//       <Route index element={<Dialogs />} />
//       <Route path="profile" element={<Profile />} />
//     </Route>
//   )

// )

function App() {
  return (
    // <RouterProvider router={router} />

    <div className='app-wrapper'>
      <BrowserRouter >

        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="profile" element={<Profile />} />
            <Route path="dialogs" element={<Dialogs />} />
            <Route path="news" element={<News />} />
            <Route path="music" element={<Music />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </div>

      </BrowserRouter >
    </div >
  );
}

export default App;
