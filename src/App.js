import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from './components/header/Header';
import { TinderCardComponent } from './components/tinder-card/TinderCard';
import { SwipeButtons } from './components/swipe-buttons/swipe-buttons';
import { Chats } from './components/chats/chats';
import { ChatScreen } from './components/chat-screen/chat-screen';

import './App.css';

export const App = () => ( 
  <div className="App">
    <Router>
      <Switch>
        <Route path="/chat/:person" >
          <Header backButton="/" />
          <ChatScreen />
        </Route>
        <Route path="/chat" >
          <Header backButton="/" />
          <Chats />
        </Route>
        <Route path="/profile" >
          I am prifile page
        </Route>
        <Route path="/" exact >
          <Header />
          <TinderCardComponent />
          <SwipeButtons />
        </Route>
      </Switch>
    </Router>
  </div>
);