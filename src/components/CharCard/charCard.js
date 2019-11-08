// Imports ===================================================================

import React from "react";
import "./charCard.css";
import Char from "./Char"

// Functions =================================================================

function CharCard(props) {
  return (
    <div className="card" key={props.characters.id} onClick={() => props.onClick(props.characters.id)}>
      <Char 
        character={props.characters}
      />
    </div>
  )
}

// Export ====================================================================

export default CharCard
