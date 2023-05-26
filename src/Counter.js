import React, { Component } from 'react'
import CounterButtons from './CounterButtons'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentCount: 0
        }
        this.handler = this.handler.bind(this)

    }

    add() {
        this.setState(currentState => ({
            currentCount: currentState.currentCount + 1
        }))
    }

    minus() {
        this.setState(currentState => ({
            currentCount: currentState.currentCount - 1
        }))
    }
    reset() {
        this.setState({ currentCount: 0 })
    }

    handler(evt) {
        let buttonName = evt.target.name;
        if (buttonName === 'add') {
            this.add()
        } else if (buttonName === 'minus') {
            this.minus()
        } else if (buttonName === 'reset') {
            this.reset()
        }
    }


    render() {
        return <div>
            <h1>COUNTER</h1>
            {/* COMPONENT GOES HERE */}
            <div>{this.state.currentCount}</div>
            <CounterButtons funcName={this.handler} btnName='add' />
            <CounterButtons funcName={this.handler} btnName='minus' />
            <CounterButtons funcName={this.handler} btnName='reset' />

        </div>
    }
}

Counter.defaultProps = {
}

export default Counter;