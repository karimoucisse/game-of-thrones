import React, { Component } from 'react'
import './App.css'
import Character from './component/Character'
import Favorite from './component/Favorite'
import Continent from './component/Continent'
import Button from './component/Button'
export default class App extends Component {

  constructor() {
    super()
    this.state = {
      characters: [],
      favorites : [],
      continents : [],
      buttonState : "Characters",
      // borderRed : " "
    }
    this.handleFavoriteClick = this.handleFavoriteClick.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.deleteFavorisCharacter = this.deleteFavorisCharacter.bind(this)
  }

  // componentDidMount() {
  //   fetch("https://thronesapi.com/api/v2/Characters")
  //   .then(response => response.json())
  //     .then(result => {
  //       this.setState({characters: result})
  //     })    

  //   fetch('https://thronesapi.com/api/v2/Continents')
  //   .then(response => response.json())
  //     .then(result => {
  //       this.setState({continents: result})
  //     }) 

  // }
  componentDidMount() {
    Promise.all([fetch('https://thronesapi.com/api/v2/Characters'),
     fetch('https://thronesapi.com/api/v2/Continents')])

      .then(([res1, res2]) => { 
         return Promise.all([res1.json(), res2.json()]) 
      })
      .then(([res1, res2]) => {
        this.setState({characters: res1})
        this.setState({continents: res2})
      });
}

  handleFavoriteClick(index) {
    const newCharacter = this.state.characters
    this.setState({favorites : [newCharacter[index], ...this.state.favorites]})
    // this.setState({borderRed:index})
  }
  handleButtonClick(string) {
    this.setState({buttonState : string})
  }
  deleteFavorisCharacter(index) {
    const duplication = this.state.favorites
    duplication.splice(index,1)
    this.setState({favorites : duplication})
    // console.log(index);
  }

  render() {
    // console.log(`button state : ${this.state.buttonState}`);
    console.log(this.state.favorites);
    // console.log(`characters : ${this.state.characters}`);
    // console.log(this.state.continents);
    // console.log(`borderRed : ${this.state.borderRed}`);
    return (
      <>
        <h1>Game of thrones</h1>
        <div className="buttons">
          <Button label="Characters" onclick={this.handleButtonClick}/>
          <Button label="continents" onclick={this.handleButtonClick}/>
          <Button label="Favoris" onclick={this.handleButtonClick}/>
        </div>
        {this.state.buttonState === "Characters" &&
          <div className="characters_container">
            {this.state.characters.map((character,index) =>
              <Character 
                key = {index}
                name={character.fullName} 
                title={character.title} 
                image={character.imageUrl}
                favoriteClick={()=> this.handleFavoriteClick(index)}
                // classBorder= {this.state.borderRed === index ? "border-red" : "border-none"}
              />)
            }
          </div>
        }
        
        {this.state.buttonState === "Favoris" &&
          (<div className="characters_container">
            {this.state.favorites.map((character,index) =>
              <Favorite 
                key = {index}
                name={character.fullName} 
                title={character.title} 
                image={character.imageUrl}
                onclickDelete={() => this.deleteFavorisCharacter(index)}
              />)
            }
          </div>)
        }

        {this.state.buttonState === "continents" &&
          <div className="characters_container">
            {this.state.continents.map((continent,index) => 
              <Continent 
                key={index} 
                name={continent.name} 
              />)
            }
          </div>
        }
        
      </>
    )
  }
}
