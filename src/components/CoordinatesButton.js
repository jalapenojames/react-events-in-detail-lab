import React, { Component } from 'react'

export default class CoordinatesButton extends Component {


    buttonOnClick = (event) => {
        const mouseArray = []
        mouseArray.push(event.clientX)
        mouseArray.push(event.clientY)

        this.props.onReceiveCoordinates(mouseArray)
    }

    render() {
        return <button onClick={this.buttonOnClick}>Coordinates Button</button>
    }
}
