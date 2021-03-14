import React from 'react';
import ReactDOM from 'react-dom';

import Home from './views/Home/';
import Studies from './views/Studies/';
import Experience from './views/Experience/';
import About from './views/About/';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact><Home /></Route>
        <Route path="/studies" exact><Studies /></Route>
        <Route path="/experience" exact><Experience /></Route>
        <Route path="/about" exact><About /></Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);