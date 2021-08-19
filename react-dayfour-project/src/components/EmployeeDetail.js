import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export class EmployeeDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employee: {}
        };
    }

    componentDidMount() {
        axios.get(`http://localhost:5001/employees/` + this.props.match.params.id)
            .then(result => {
                this.setState({ employee: result.data });
            })
            .catch(error => {
                console.log(error);
            })
    }

    deleteEmployee(id) {
        axios.delete(`http://localhost:5001/employees/` + id)
            .then(() => {
                alert('Employee Deleted Successfully.');
                this.props.history.push('/employees');
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                {/* <h3>Employee Detail</h3> */}
                <br />
                <div className="card">
                    <div className="card-header">Details of <b>{this.state.employee.name}</b></div>
                    <div className="card-body">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Employee Id</th>
                                    <td>{this.state.employee.id}</td>
                                </tr>
                                <tr>
                                    <th>Employee Name</th>
                                    <td>{this.state.employee.name}</td>
                                </tr>
                                <tr>
                                    <th>Employee Salary</th>
                                    <td>{this.state.employee.salary}</td>
                                </tr>
                                <tr>
                                    <th>Employee Designation</th>
                                    <td>{this.state.employee.designation}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="card-footer">
                        <button onClick={this.deleteEmployee.bind(this, this.state.employee.id)} className="btn btn-outline-danger">Delete</button> &nbsp;
                        <Link to={`/employee-update/${this.state.employee.id}`} className="btn btn-outline-info">Update</Link> &nbsp;
                        <Link to={'/employees'} className="btn btn-outline-secondary">Go Back</Link>
                    </div>
                </div>
            </div>
        )
    }
}