import React, { Component } from "react";
import axios from "axios";

export class EmployeeUpdate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employee: {},
            name: null,
            salary: null,
            designation: null
        };
    }

    componentDidMount() {
        axios.get(`http://localhost:5001/employees/` + this.props.match.params.id)
            .then(result => {
                this.setState({
                    employee: result.data,
                    name: result.data.name,
                    salary: result.data.salary,
                    designation: result.data.designation
                });
                console.log(this.state.employee);
            })
            .catch(error => {
                console.log(error);
            })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const employee = {
            id: this.props.match.params.id,
            name: this.state.name,
            salary: this.state.salary,
            designation: this.state.designation
        };
        axios.put(`http://localhost:5001/employees/` + this.props.match.params.id, employee)
            .then(result => {
                alert('Employee Update Successfully.');
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
    }


    render() {
        return (
            <div>
                <h3>Update Existing Employee</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Employee Name: </label>
                        <input type="text"
                            className="form-control"
                            name="name"
                            value={this.state.name || ''}
                            onChange={this.handleChange}

                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Employee Salary: </label>
                        <input type="text"
                            className="form-control"
                            name="salary"
                            value={this.state.salary || ''}
                            onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Employee Designation: </label>
                        <input type="text"
                            className="form-control"
                            name="designation"
                            value={this.state.designation || ''}
                            onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                        <input type="submit" value="Update Employee" className="btn btn-success" /> &nbsp;
                        <input type="reset" value="Clear Fields" className="btn btn-danger" />
                    </div>
                </form>
            </div>
        );
    }
}

