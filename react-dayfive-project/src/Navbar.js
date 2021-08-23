import React, { Component } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "./repository";

export class Navbar extends Component {

    // logout() {
    //     localStorage.removeItem('isLoggedIn');
    //     localStorage.removeItem('loginName');
    //     alert('You are logged out successfully.');
    //     window.location = '/home'
    // }

    logout() {
        if (isAuthenticated()) {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('loginName');
            alert('You are logged out successfully.');
            window.location = '/home'
        } else {
            alert('You are not logged In.')
        }
    }

    render() {
        const authStatus = isAuthenticated();
        return (
            <div>
                {authStatus ? <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to={"/"}>Admin Portal</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to={"/home"}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/employees"}>Manage Employees</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to={"/contact"}>Contact Us</Link>
                                </li> */}
                            </ul>
                            <form className="d-flex">
                                <button onClick={this.logout} className="btn btn-outline-danger">Logout</button> &nbsp;
                            </form>
                        </div>
                    </div>
                </nav> : <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to={"/"}>Admin Portal</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to={"/home"}>Home</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to={"/contact"}>Contact Us</Link>
                                </li> */}
                            </ul>
                            <form className="d-flex">
                                <Link to={'/login'} className="btn btn-outline-success">Login</Link> &nbsp;
                                <Link to={'/register'} className="btn btn-outline-success">Register</Link> &nbsp;
                            </form>
                        </div>
                    </div>
                </nav>}
            </div>
        )
    }
}