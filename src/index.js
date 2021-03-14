import React from 'react';
import ReactDOM from 'react-dom';
import Home from './views/Home/';
import Studies from './views/Studies/';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/studies" exact>
          <Studies />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);