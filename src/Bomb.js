// your Bomb code here!
import React, { Component } from 'react';
//import React from 'react';

export default class Bomb extends Component {

    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    handleReturn() {
        if (this.state.secondsLeft === 0) {
            return <text>Boom!</text>
       } else {
       return <text>{this.state.secondsLeft} seconds left before I go boom!</text>
       }

    }

    render() {
        return (
            this.handleReturn()
            
        )
    }
}