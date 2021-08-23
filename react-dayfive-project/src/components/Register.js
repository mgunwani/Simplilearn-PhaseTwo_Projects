import React, { Component } from "react";
import { register } from "../repository";

export class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            user_type: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        register(this.state)
            .then(() => {
                if (localStorage.getItem('isLoggedIn')
                    && localStorage.getItem('loginName')) {
                    window.location = '/home'
                } else {
                    window.location = '/register'
                }
            }).catch((error) => { console.log(error); })
    }

    render() {
        return (
            <div>
                <h3>User Registeration</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Username: </label>
                        <input type="text"
                            className="form-control"
                            name="username"
                            placeholder="Username Here"
                            onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password: </label>
                        <input type="password"
                            className="form-control"
                            name="password"
                            placeholder="Password Here"
                            onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email: </label>
                        <input type="text"
                            className="form-control"
                            name="email"
                            placeholder="Email ID Here"
                            onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">User Type: </label>
                        <input type="text"
                            className="form-control"
                            name="user_type"
                            placeholder="User Type Here"
                            onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                        <input type="submit" value="Register" className="btn btn-success" /> &nbsp;
                        <input type="reset" value="Clear Fields" className="btn btn-danger" />
                    </div>
                </form>
            </div>
        )
    }
}