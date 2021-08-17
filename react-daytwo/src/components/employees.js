
import React, { Component } from "react";
import { Employee } from "./employee";

export class Employees extends Component {

    state = {
        title: "Employees List",
        employees: [
            { name: 'King', age: 20, salary: 34000 },
            { name: 'Kochhar', age: 25, salary: 40000 },
            { name: 'Sarah', age: 30, salary: 30000 },
            { name: 'Bowling', age: 26, salary: 23000 },
            { name: 'Gautam', age: 32, salary: 45000 }
        ]
    }

    doClickMe = () => {
        var newState = this.state.employees.map((employee) => {
            employee.age += 5;
            return employee;
        });
        this.setState({ employees: newState });
    }

    render() {
        return (
            <div>
                <h3>{this.state.title}</h3>
                {
                    this.state.employees.map((employee, index) => {
                        return <Employee name={employee.name} age={employee.age} salary={employee.salary} key={index} />
                    })
                }
                <input type="button" onClick={this.doClickMe} value="Increase Age by 5 years" />
            </div>
        )
    }
}

