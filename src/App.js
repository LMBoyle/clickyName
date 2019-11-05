import React, { Component } from 'react';
// import './App.css';
import CharCard from "./components/CharCard/charCard"
import Wrapper from "./components/Wrapper/wrapper";
import Title from "./components/Title/title";
import characters from "./characters.json"

class App extends Component {
  state = {
    characters
  };


  render() {
    return (
      <Wrapper>
        <Title> Characters List </Title>

        {this.state.characters.map(character => (
          <CharCard
            id={character.id}
            key={character.id}
            name={character.name}
            img={character.img}
          />
        ))}

      </Wrapper>
    );
  }
}

export default App;