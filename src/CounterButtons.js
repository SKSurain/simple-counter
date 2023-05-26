import React, { Component } from 'react'

class CounterButtons extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <button onClick={this.props.funcName} name={this.props.btnName}>{this.props.btnName.toUpperCase()}</button>
        )
    }
}


export default CounterButtons;