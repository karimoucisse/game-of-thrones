import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        const{label,onclick}=this.props
        return (
            <button onClick={()=> onclick(label)}>{label}</button>
        )
    }
}
