import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Employees } from "./components/Employees";
import { Home } from "./components/Home";

export class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">Admin Project</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/employees'} className="nav-link">Employees</Link>
                </li>
              </ul>
            </div>
          </nav> <br />
          <Route path='/' exact render={Home} />
          <Route path='/home' render={Home} />
          <Route path='/employees' component={Employees} />
        </Router>
      </div>
    )
  }
}