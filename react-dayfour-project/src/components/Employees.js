import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export class Employees extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5001/employees`)
            .then(result => {
                this.setState({ employees: result.data });
                console.log(this.state.employees);
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <Link to={'/employee-add'} className="btn btn-secondary">Add New Employee</Link>
                <br /><br />
                <h3>Employees List</h3>
                <br />
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Salary</th>
                            <th>Designation</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employees.map((employee, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{employee.id}</td>
                                        <td>{employee.name}</td>
                                        <td>{employee.salary}</td>
                                        <td>{employee.designation}</td>
                                        <td>
                                            <Link
                                                to={'employee-detail/' + employee.id}
                                                className="btn btn-outline-secondary">View Details</Link>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}