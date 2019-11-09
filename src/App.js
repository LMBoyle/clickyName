// Imports ===================================================================

import React, { Component } from 'react';
import './App.css';
import CharCard from "./components/CharCard/CharCard"
import Wrapper from "./components/Wrapper/Wrapper";
import HeadDiv from "./components/HeadDiv/HeadDiv"
import Title from "./components/Title/Title";
import Score from "./components/Score/Score";
import characters from "./characters.json"

// Export ====================================================================

export default
// Functions =================================================================
  class App extends Component {
    state = {
      characters,
      score: 0,
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
    setClicked = id => {
      console.log("you clicked on the " + id + " character");
      // Find the character with the id of the clicked card
      let clickedChar = this.state.characters.find(char => char.id === id);

      // If is clicked is false
      if (!clickedChar.isClicked) {
        clickedChar.isClicked = true
      
        this.setState({
          characters: this.state.characters,
          score: this.state.score + 1
        })
        // Shuffle
        this.shuffle()
        console.log("Updated\n") 
        this.state.characters.map(character => console.log(character.name + " " + character.isClicked))
        console.log("================================================================")
      }
      // If is clicked is true
      else {
        alert("Game Over!")
        this.setState({ 
          characters: this.state.characters.map(character => { return { ...character, clicked : false } }),
          score: 0
        })
        // Shuffle
        this.shuffle()
      }
    }

    render() {
      return (
        <Wrapper>
          <HeadDiv>
            <Title> Rick and Morty Clicky Game </Title>
            <Score> Score: {this.state.score} </Score>
          </HeadDiv>

          {this.state.characters.map(character => (
            <CharCard
              key={character.id}
              characters={character}
              onClick={() => this.setClicked(character.id)}
            />
          ))}
        </Wrapper>
      );
    }
  }