// Imports ===================================================================

import React, { Component } from 'react';
import './App.css';
import CharCard from "./components/CharCard/CharCard"
import Wrapper from "./components/Wrapper/Wrapper";
import HeadDiv from "./components/HeadDiv/HeadDiv"
import Title from "./components/Title/Title";
import Score from "./components/Score/Score";
import Alert from './components/Alert/Alert';
import characters from "./characters.json"

// Functions =================================================================

class App extends Component {
  state = {
    characters,
    score: 0,
    endGame: false,
    userWon: false,
  };

  // Shuffle the cards
  shuffle = () => {
    console.log("\n================================= Current Data ===============================")
    console.log(this.state.characters)
    console.log("==============================================================================\n")

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

      console.log("start score: ", this.state.score)

      this.setState({
        characters: this.state.characters,
        score: this.state.score + 1
      })

      console.log("\n============================ Updated  ======================================")
      this.state.characters.map(character => console.log(character.name + " " + character.isClicked))
      console.log("============================================================================\n")

      console.log("updated score: ", this.state.score)
      // If score = 12,         alert you win,       else shuffle 
      this.state.score === 11 ? this.winGame() : this.shuffle()
    }
    // If is clicked is true
    else {
      // alert("Game Over!")
      this.setState({
        endGame: true,
        userWon: false
      })
      // this.resetData()
    }
  }

  // At the end of a game, reset the date
  resetData = () => {
    const newData = this.state.characters.map(item => item.isClicked = false)

    this.setState ({
      characters: this.state.characters,
      score: 0,
      endGame: false,
      userWon: false
    })

    console.log("\n============================ Reset Data ======================================")
    console.log(newData)
    console.log("==============================================================================\n")

    return this.shuffle();
  };

  // If user wins
  winGame = () => {
    // alert("You win!")
    this.setState({
      endGame: true,
      userWon: true
    })
    // this.resetData()
  }

  // Render the page
  render() {
    return (
      <Wrapper>
        <HeadDiv>
          <Title> Rick and Morty Clicky Game </Title>
          <Score> Score: {this.state.score} </Score>
        </HeadDiv>

        <Alert
          style={{ display: this.state.endGame ? "block" : "none" }}
          // style={{display : "none"}}
          type={this.state.userWon ? "success" : "danger"}
          onClick={this.resetData}
        >
          {this.state.userWon ? "You Won!" : "You Lost!"}
        </Alert>

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

// Export ====================================================================

export default App