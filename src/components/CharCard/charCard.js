// Imports ===================================================================

import React from "react";
import "./charCard.css";
import Char from "./Char"

// Functions =================================================================

function CharCard(props) {
  return (
    <>
    {props.characters.map(character => 
      <div className="card" key={character.id} onClick={() => props.onClick(character.id)}>
        <Char 
          character={character}
        />
      </div>
    )}
    </>
  );
}

// Export ====================================================================

export default CharCard
