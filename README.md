# React Moving Slider

 A simple **React** component to display your images using CSS animations and transitions.
 
 It supports click events for sliding and moving through an array of images.

Demo here

![React Moving Slider Example](https://i.ibb.co/py78b0b/react-moving-slider.gif)


# Installation

run `npm install react-moving-slider` and then, in your component `import MovingSlider from 'react-moving-slider'`

# Usage

The basic setup for a slider is
```
import React from "react"
import MovingSlider from 'react-moving-slider'

function App() {
  return (
    <MovingSlider
        images={[
            "https://picsum.photos/1200/1500?random=1",
            "https://picsum.photos/1200/1500?random=2",
            "https://picsum.photos/1200/1500?random=3",
        ]}
    />
  )
}
```
You can of course change the array values to be your images URLs

# Options

Option Name | Type | Description | Default Value | Required
------------ | ------------- | ------------- | ------------- | ------------- 
`minHeight` | *number* | the minimal height that one column can reach (in percentage and relative to the parent container) | 20 | No
`maxHeight` | *number* | the maximal height that one column can reach (in percentage and relative to the parent container)| 100 | No
`images`| *Array* | the array of images to be passed as "background-image" value, if more than 1 is provided, the `handleSlide` method will handle the transition between images on click | [] | Yes
`numColumns`| number | the number of columns to be displayed as div with the background fixed image | 30 | No
`smartphoneNumColumns`| number | he number of columns to be displayed as div with the background fixed image on a smartphone screen | 15 | No
`fixedHeight`| number | If provided, the slider will ignore it's parent height and will use this value in pixels insted | null | No
`fixedWidth`| number | If provided, the slider will ignore it's parent width and will use this value in pixels insted | null | No
