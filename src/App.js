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
    this.addItem=this.addItem.bind(this)
    this.deleteTask=this.deleteTask.bind(this)

  }
  handleButtonClick(string) {
    this.setState({activeTab: string})
    // console.log(string);
  }
  addItem(name,price) {
    const array = {
      name : name, 
      price: price}

    this.setState({items: [array, ...this.state.items]})
    
    // console.log(`name : ${name}`);
    // console.log(`price : ${price}`);
  }
  deleteTask(index) {
    let array = this.state.items
    array.splice(index,1)
    this.setState({items: array})
  }

  render() {
    // console.log(`actveTab : ${this.state.activeTab}`);
    console.log(this.state.items);
    return (
      <div className="container">
        <div className="row justify-content-center">
          <Button label = "add" handleClick = {this.handleButtonClick} isSelected={this.state.activeTab === "add"}/>
          <Button label = "list" handleClick = {this.handleButtonClick} isSelected={this.state.activeTab === "list"}/>
          <Button label = "pay" handleClick = {this.handleButtonClick} isSelected={this.state.activeTab === "pay"}/>
        </div>
        {this.state.activeTab === "add" && 
          <Add addItem={this.addItem} 
        /> }

        {this.state.activeTab === "list" && 
          <List items= {this.state.items} 
          deleteTask={this.deleteTask}
        /> }

        {this.state.activeTab === "pay" &&
         <Pay/> 
         }
        
        
      </div>
    )
  }
}


export default App
