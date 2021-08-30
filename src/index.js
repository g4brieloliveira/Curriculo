import React from 'react';
import ReactDOM from 'react-dom';

import {Header} from './components/Header';
import {Footer} from './components/Footer';

import {Home} from './views/Home/';
import Experience from './views/Experience/';
import About from './views/About/';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <>
        <Header />
          <Switch>
            <Route path="/" exact><Home /></Route>
            <Route path="/experience" exact><Experience /></Route>
            <Route path="/about" exact><About /></Route>
          </Switch>
        <Footer />
      </>
    
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);