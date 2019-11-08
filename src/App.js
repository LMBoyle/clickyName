// Imports ===================================================================

import React, { Component } from 'react';
import './App.css';
import CharCard from "./components/CharCard/CharCard"
import Wrapper from "./components/Wrapper/wrapper";
import Title from "./components/Title/title";
import characters from "./characters.json"

// Vars ======================================================================

// Export ====================================================================

export default
// Functions =================================================================
  class App extends Component {
    state = {
      characters,
      id: "",
      isClicked: "",
    };

    // Shuffle the cards
    shuffle = () => {
      this.setState({
        characters: this.state.characters.sort(function(a,b){
          return 0.5 - Math.random()
        })
      })
    }

    // When clicked, set the character to clicked
    setClicked = (id, isClicked) => {
      console.log("clicked " + id);
      console.log("click state " + this.state.characters.isClicked)
      // let index = characters.findIndex(characters => characters.id === id)
      // characters[index].isClicked = true
      console.log(this.state.characters)
    }

    render() {
      return (
        <Wrapper>
          <Title> Characters List </Title>
            <CharCard
              characters={this.state.characters}
              onClick={() => this.setClicked(this.id)}
            />
        </Wrapper>
      );
    }
  }