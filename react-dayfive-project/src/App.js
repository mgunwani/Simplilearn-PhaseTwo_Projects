import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Contact } from "./components/Contact";
import { EmployeeAdd } from "./components/EmployeeAdd";
import { EmployeeDetail } from "./components/EmployeeDetail";
import { Employees } from "./components/Employees";
import { EmployeeUpdate } from "./components/EmployeeUpdate";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Navbar } from "./Navbar";

export class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div className="container">
          <br />
          <Route path='/' exact render={Home} />
          <Route path='/home' render={Home} />
          <Route path='/employees' component={Employees} />
          <Route path='/employee-add' component={EmployeeAdd} />
          <Route path='/employee-detail/:id' component={EmployeeDetail} />
          <Route path='/employee-update/:id' component={EmployeeUpdate} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          {/* <Route path='/contact' render={Contact} /> */}

        </div>
      </Router>
    )
  }
}