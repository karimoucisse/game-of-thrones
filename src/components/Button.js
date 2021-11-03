import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        const{label,handleClick,isSelected}=this.props
        return ( 
        
                <button 
                    className={`btn btn-secondary col-2 mx-4 ${isSelected && "bg-primary text-white"}`}
                    onClick={()=> handleClick (label)}>
                    {label}
                </button>
        )
    }
}
