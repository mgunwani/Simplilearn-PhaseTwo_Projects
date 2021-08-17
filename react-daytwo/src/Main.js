
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, NavLink, Redirect } from "react-router-dom";

const Home = () => {
    return (
        <h2>Home Page</h2>
    )
};

const About = () => {
    return (
        <h2>About Page</h2>
    )
};

const Contact = () => {
    return (
        <h2>Contact Page</h2>
    )
};

// const User = ({ match }) => {
//     return (
//         <div>
//             <h2>User Page</h2>
//             <p>Welcome {match.params.username}!!</p>
//         </div>
//     )
// }

const User = (params) => {
    return (
        <div>
            <h2>User Page</h2>
            <p>Welcome {params.username}!!</p>
        </div>
    )
}

class Main extends Component {

    state = {
        loggedIn: false
    };

    loginHandle = () => {
        this.setState(prevState => ({
            loggedIn: !prevState.loggedIn
        }));
    }

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Link to='/home'>Home</Link> |
                        <Link to='/about'>About</Link> |
                        <Link to='/contact'>Contact</Link> |
                    </div>
                    <hr />
                    <div>
                        <NavLink to='/home' activeStyle={{ color: "green" }}>Home</NavLink> |
                        <NavLink to='/about' activeStyle={{ color: "green" }}>About</NavLink> |
                        <NavLink to='/contact' activeStyle={{ color: "green" }}>Contact</NavLink> |
                        <NavLink to='/user/john' activeStyle={{ color: "green" }}>User Detail</NavLink> |
                        <input type="button" onClick={this.loginHandle.bind(this)}
                            value={this.state.loggedIn ? "Logout" : "Login"} />
                    </div>
                    <Route path='/' exact render={Home} />
                    <Route path='/home' render={Home} />
                    <Route path='/about' render={About} />
                    {/* <Route path='/contact' render={Contact} /> */}
                    <Route path='/contact' render={() => (
                        this.state.loggedIn ? <Contact /> : <Redirect to='/' />
                    )} />
                    {/* <Route path='/user/:username' render={User} /> */}
                    <Route path='/user/:username' render={({ match }) => (
                        this.state.loggedIn ? <User username={match.params.username} /> : <Redirect to='/' />)
                    } />
                </Router>
            </div>
        );
    }
}

export default Main;