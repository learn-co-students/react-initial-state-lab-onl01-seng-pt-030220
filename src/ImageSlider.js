// your ImageSlider code here!
import React from 'react';

class ImageSlider extends React.Component {
 
    // we use the constructor to set the INITIAL STATE
    constructor() {
      super()      
      this.state = {
        currentSlideIndex: 0
      }
    }


      render() {
          const Current_Slide = this.state.currentSlideIndex
        return (
        <h1>I am on slide {Current_Slide}</h1>
        )
      }
}

export default ImageSlider;