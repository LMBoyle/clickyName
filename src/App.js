import React, { Component } from 'react';
import './App.css';
import CharCard from "./components/CharCard"
import characters from "./characters.json"

class App extends Component {
  state = {
    characters
  };


  render() {
    return (
      <div className="cards">
        <h1>Characters List</h1>
          {this.state.characters.map(character => (
            <CharCard
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.img}
            />
          ))}
      </div>
    );
  }
}

export default App;