import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Component } from "react";
import "bulma/css/bulma.css";

import gifsList from './components/gifsList.component.js'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar">
            <div className="navbar-brand">
            <a className="" href="/" target="navbar-item">
              <img src={logo} height="120" width="120"></img>
            </a>
            
            <Link to="/" className="navbar-item">
              React App
            </Link>
            </div>

            <div className="navbar-menu">
            <Link to="/" className="navbar-item">
              Todos
            </Link>

            <Link to="/create" className="navbar-item">
              Create Todo
            </Link>
            </div>
          </nav>
          <Route path="/" exact component={gifsList}/>
        </div>
      </Router>
    );
  }
}
