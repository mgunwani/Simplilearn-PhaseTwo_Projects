
/* Data Binding Events */

import React, { Component } from "react";

export class User extends Component {

    state = {
        name: 'John Smith'
    };

    changeNameOne = () => {
        this.setState({
            name: 'King Kochhar'
        })
    }
    changeNameTwo = (newName) => {
        this.setState({
            name: newName
        })
    }

    changeNameFromInput = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    render() {
        return (
            <div>
                <h2>Manage User</h2>
                {/* Data Binding with Event */}
                <p>Name: <input type="text" onChange={this.changeNameFromInput} value={this.state.name} /> </p>
                <p>Welcome {this.state.name}!!</p>
                {/* Raising Events by different Approaches */}
                <button onClick={this.changeNameOne}>Change Name One</button>
                <button onClick={() => this.changeNameTwo("Er. John Smith")}>Change Name Two</button>
                <button onClick={this.changeNameTwo.bind(this, "Trainer John Smith")}>Change Name Two Again</button>
                <br /><br />


            </div>
        );
    }
}