import React, { Component } from 'react'

export default class Add extends Component {

    constructor() {
        super()

        this.state = {
            name: "",
            price: 0
        }
        this.handleNameChange=this.handleNameChange.bind(this)
        this.handlePriceChange=this.handlePriceChange.bind(this)
    }
    handleNameChange(e){
        this.setState({name:e.target.value})
        // console.log(this.state.name);
    }
    handlePriceChange(e) {
        this.setState({price : e.target.value})
        console.log(this.state.price);
    }

    render() {
        return (
            <div>
                <h1>Add</h1>
                <div className="row ">
                    <input type="text" 
                    className="form col-7 mb-5" 
                    placeholder="Add" 
                    onChange={this.handleNameChange}/>
                    <span>{this.state.price}</span>
                    <input type="range" 
                    className="form col-7" 
                    min="1" max="10"
                    onChange={this.handlePriceChange}/>
                </div>
            </div>
        )
    }
}
