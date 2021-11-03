import React, { Component } from 'react'
import Button from './components/Button'
import Add from './components/Add'
import List from './components/List'
import Pay from './components/Pay'

 class App extends Component {

  constructor(){
    super()

    this.state = {
      activeTab: "add",
      items: []
    }
    this.handleButtonClick=this.handleButtonClick.bind(this)
  }
  handleButtonClick(string) {
    this.setState({activeTab: string})
    // console.log(string);
  }
  // addItem(name,price) {
  //   this.setState({name: name , price: price} ...this.state.items})
  // }

  render() {
    console.log(`actveTab : ${this.state.activeTab}`);
    return (
      <div className="container">
        <div className="row justify-content-center">
          <Button label = "add" handleClick = {this.handleButtonClick} isSelected={this.state.activeTab === "add"}/>
          <Button label = "list" handleClick = {this.handleButtonClick} isSelected={this.state.activeTab === "list"}/>
          <Button label = "pay" handleClick = {this.handleButtonClick} isSelected={this.state.activeTab === "pay"}/>
        </div>
        {this.state.activeTab === "add" && <Add/> }
        {this.state.activeTab === "list" && <List/> }
        {this.state.activeTab === "pay" && <Pay/> }
        
        
      </div>
    )
  }
}


export default App
