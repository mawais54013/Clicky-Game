import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Message from "./components/Message";
import Area from "./components/ScoreArea"
import characters from "./friends.json";
import "./App.css";
// link to 7 different area that run from this page 

class App extends Component {
    // call and use these in the following code to set up.
    state = {
        characters,
        // scores
        score: 0,
        // tops scores here 
        top: 0,
        select: [],
        // 
        message: "",
    };
// this is where I reset the each state when the game is loaded 
    reset = () => {
        // if the top score is less than the current score then the top score is the current score 
        if(this.state.top < this.state.score)
        {
            this.setState({top: this.state.score});
        }
        // then reset the current score to 0
        this.setState({score: 0});
        // reset each character click to be 0
        this.state.characters.forEach(character => {
            
            character.click = 0;
        });
        
    }
// if a character is clicked then if randomize each character card 
    randomize = id => {
    
        this.state.characters.find((char, i) => {
            // get each character id and check them 
          if (char.id === id) {
            if(characters[i].click === 0){
                this.setState({message: ""});
                // if a character is clicked then score is increased by 1
              characters[i].click = characters[i].click + 1;
            //   set the score
              this.setState({score : this.state.score + 1}, function(){
                console.log(this.state.score);
              });

            //   randomize the characters by sorting and randomize
              this.state.characters.sort(() => Math.random() - 0.5)
              return true; 
            } 
            else if (this.state.score === 12){
                console.log("winner");
              //   if a character is clicked again then this message appears
                this.setState({message: "Great Job, you win"});
                  this.reset();
                  
              } else {
              console.log("game over");
            //   if a character is clicked again then this message appears
              this.setState({message: "Sorry you lose click another character to play again"});
                this.reset();
                
            }
          }
        });
      }
// this is where everything is rendered 
    render() {
        return ( 
            <Wrapper>
                {/* everything inside a wrapper */}
                {/* main title */}
                <Title>Disney Clicky Game</Title>
                {/* scores here  */}
                <Area>{this.state.score} | Top Score {this.state.top}</Area>
                <Message>{this.state.message}</Message>
                {/* message appear  */}
                {this.state.characters.map(character => (
                    // <button>
                    // each character will have the following
                    <CharacterCard
                    id={character.id}
                    key={character.id}
                    name={character.name}
                    image={character.image}
                    // clickIt = {this.clickIt}
                    randomize={this.randomize}
                    />
                    // </button>
                ))}
                
            </Wrapper>
        );
    }
}

export default App;