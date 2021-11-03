import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        const{label,handleClick,isSelected}=this.props
        return ( 
        
                <button 
                    className={`btn btn-outline-primary col-2 mx-4 ${isSelected && "bg-secondary text-white"}`}
                    onClick={()=> handleClick (label)}>
                    {label}
                </button>
        )
    }
}
