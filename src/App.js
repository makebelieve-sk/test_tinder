import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from './components/header/Header';
import { TinderCardComponent } from './components/tinder-card/TinderCard';
import { SwipeButtons } from './components/swipe-buttons/swipe-buttons';

import './App.css';

export const App = () => ( 
  <div className="App">
    <Header />

    <Router>
      <Switch>
        <Route path="/" exact >
          <TinderCardComponent />
          <SwipeButtons />
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