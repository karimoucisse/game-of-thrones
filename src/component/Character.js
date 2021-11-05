import React, { Component } from 'react'

export default class Character extends Component {
    render() {
        const {name,title,image,favoriteClick,classBorder}= this.props
        return (
            <div className="character">
                <img src={image} alt="" className={classBorder}/>
                <div className= "description">
                <h2>{name}</h2>
                <div className="logo_container">
                    <p>{title}</p>
                    <i className ={`fas fa-heart`} 
                    onClick= {favoriteClick}
                    >
                    </i>
                </div>
                </div>
                
            </div>
        )
    }
}
