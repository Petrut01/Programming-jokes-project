import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Input from "./components/Input";
import Nav from "./components/Navbar";
import LoginForm from "./modules/LoginForm";
import GetStartedPage from "./pages/GetStarted";
import { Switch } from 'react-router-dom';
import Jokes from './pages/Jokes';


function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/get-started">
          <GetStartedPage />
        </Route>
        <Route path="/">
          <Jokes />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
