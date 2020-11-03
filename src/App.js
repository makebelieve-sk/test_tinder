import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from './components/header/Header';

import './App.css';

export const App = () => ( 
  <div className="App">
    <Header />

    <Router>
      <Switch>
        <Route path="/" exact >
          I am homepage
        </Route>
        <Route path="/chat" >
          I am chatpage
        </Route>
        <Route path="/profile" >
          I am prifile page
        </Route>
      </Switch>
    </Router>
  </div>
);