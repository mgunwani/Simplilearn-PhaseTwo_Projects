import React, { Component } from "react";
import { Employees } from "./components/employees";
import { User } from "./components/User";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Employees /> */}
        <User />
      </div>
    );
  }
}

export default App;