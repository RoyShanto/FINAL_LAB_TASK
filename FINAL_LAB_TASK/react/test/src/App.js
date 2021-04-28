import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './components/Home/Home';
import AddEvent from './components/AddEvent/AddEvent';
import Navbar from './components/Navbar/Navbar';
import EventList from './components/EventList/EventList';

function App() {
  return (
    <Router>
      <Navbar />
      <switch>
        <Route exact path="/">
        <Home />  
        </Route> 

        <Route path="/home">
        <Home />  
        </Route>

        <Route path="/add_event">
        <AddEvent />  
        </Route>

        <Route path="/event_list">
        <EventList />  
        </Route>


      </switch>
    </Router>
  );
}

export default App;
