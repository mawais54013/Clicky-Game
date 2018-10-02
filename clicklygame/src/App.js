import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Message from "./components/Message";
import Area from "./components/ScoreArea"
import characters from "./friends.json";
import "./App.css";


class App extends Component {
    state = {
        characters,
        score: 0,
        top: 0,
        select: [],
        message: "",
    };

    reset = () => {
        if(this.state.top < this.state.score)
        {
            this.setState({top: this.state.score});
        }
        this.setState({score: 0});
        this.state.characters.forEach(character => {
            
            character.click = 0;
        });
        
    }

    randomize = id => {
        this.state.characters.find((char, i) => {
          if (char.id === id) {
            if(characters[i].click === 0){
              characters[i].click = characters[i].click + 1;
              this.setState({score : this.state.score + 1}, function(){
                console.log(this.state.score);
              });
              this.state.characters.sort(() => Math.random() - 0.5)
              return true; 
            } else {
              console.log("game over");
              this.setState({message: "Sorry you lose click another character to play again"});
                this.reset();
                
            }
          }
        });
      }

    render() {
        return ( 
            <Wrapper>
                <Title>Disney Clicky Game</Title>
                <Area>{this.state.score} | Top Score {this.state.top}</Area>
                <Message>{this.state.message}</Message>
                {this.state.characters.map(character => (
                    // <button>
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