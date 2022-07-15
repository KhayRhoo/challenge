import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import {Home} from './components/home';
import {Head} from './components/head';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <App />
      <Router histor={browserHistory}>
        <Route path={"/"} component={root}>
          <IndexRoute component={Home}/>
          <Route path={"home"} component={Home}/>
          <Route path={"shop"} component={Shop}/>
        </Route>
        <Route path={"home-single"} component={Home}/>
      </Router>
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
