import reportWebVitals from './reportWebVitals';
// import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import SamuraiJSApp from './App';
// import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <SamuraiJSApp />
    {/* </Provider> */}
  </React.StrictMode>
);

reportWebVitals();