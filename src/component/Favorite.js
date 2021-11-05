import React, { Component } from 'react'

export default class favorite extends Component {
    render() {
        const {name,title,image,onclickDelete}= this.props
        return (
            <div className="character">
                <img src={image} alt=""/>
                <div className="description">
                    <h2>{name}</h2>
                    <div className="logo_container">
                        <p>{title}</p>
                        <i className="fas fa-trash-alt" onClick={onclickDelete}></i>
                    </div>
                </div>
            </div>
        )
    }
}
