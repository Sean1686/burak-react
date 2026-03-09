// @ts-nocheck
import { log } from "console";
import { Component } from "react";
import React from "react";

class Test extends Component {
    constructor (props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964
        };
    }
    changeColor = () => {
             this.setState( {
            brand: "Tesla",
            model: "Model S",
            color: "red",
            year: 2020
    })
};  

componentDidMount() {
    console.log("componentDidMount")
    // runs after first render => RETRIEVE DATA FROM BACKEND SERVER
};

componentWillUnmount() {
    console.log("componentWillUnmount")
    // runs before component unmount
}

componentDidUpdate() {};

    render() {
        return(
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color} - Model: {this.state.model} from {this.state.year}.
                </p>
                <button type="button" onClick={this.changeColor}>
                    Change color
                </button>
            </div>
        )
    }
} 

export default Test