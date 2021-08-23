import React, { Component } from "react";
import axios from "axios";

export class EmployeeAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            salary: null,
            designation: null
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const employee = {
            name: this.state.name,
            salary: this.state.salary,
            designation: this.state.designation
        };
        axios.post(`http://localhost:5001/employees`, employee)
            .then(result => {
                alert('Employee Added Successfully.');
                console.log(result);
                this.props.history.push('/employees');
            })
            .catch(error => {
                console.log(error);
            })
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name]: value });
        // console.log(this.state);
    }

    render() {
        return (
            <div>
                <h3>Add New Employee</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Employee Name: </label>
                        <input type="text"
                            className="form-control"
                            name="name"
                            placeholder="Employee Name Here"
                            onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Employee Salary: </label>
                        <input type="text"
                            className="form-control"
                            name="salary"
                            placeholder="Employee Salary Here"
                            onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Employee Designation: </label>
                        <input type="text"
                            className="form-control"
                            name="designation"
                            placeholder="Employee Designation Here"
                            onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                        <input type="submit" value="Add Employee" className="btn btn-success" /> &nbsp;
                        <input type="reset" value="Clear Fields" className="btn btn-danger" />
                    </div>
                </form>
            </div>
        )
    }
}