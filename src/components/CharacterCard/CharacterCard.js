import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
    // this card has a onclick function that performs randomize once clicked 
    <div className = "card" onClick={() => props.randomize(props.id)}>
        <div className = "img-container">
        {/* they have a img props  */}
            <img alt={props.name} src={props.image} />
        </div>
    </div>
    
);

export default CharacterCard;