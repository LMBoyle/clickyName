// Imports ===================================================================

import React from "react";
import "./CharCard.css";
import Char from "./Char"

// Functions =================================================================

function CharCard(props) {
  return (
    <div className="card" onClick={() => props.onClick(props.characters.id)}>
      <Char 
        character={props.characters}
      />
    </div>
  )
}

// Export ====================================================================

export default CharCard
