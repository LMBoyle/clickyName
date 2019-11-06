// Imports ===================================================================

import React, { Component } from 'react';
import './App.css';
import CharCard from "./components/CharCard/charCard"
import Wrapper from "./components/Wrapper/wrapper";
import Title from "./components/Title/title";
import characters from "./characters.json"

// Vars ======================================================================

// Functions =================================================================

function shuffle(array) {
  for (var i = array.length-1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

// Export ====================================================================

class App extends Component {
  state = {
    characters,
    clicked: false,
  };

  render() {
    const shuffledCards = shuffle(characters)
    return (
      <Wrapper>
        <Title> Characters List </Title>

        {shuffledCards.map(character => (
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