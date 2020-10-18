// your ImageSlider code here!
import React, { Component } from 'react';

export default class ImageSlider extends Component {
    constructor(props) {
        // initial state should have a property called currentSlideIndex that starts at 0
        super()
        this.state = {
            currentSlideIndex: 0
        }
      }
      
    render() {
        return (
        <h1>I am on slide {this.state.currentSlideIndex}</h1>
        )
    }
}
