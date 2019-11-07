// Imports ===================================================================

import React from "react";
import "./charCard.css";

// Functions =================================================================

function CharCard(props) {
  return (
    <div className="card" onClick={() => props.clicked(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.img} />
      </div>
    </div>
  );
}

// Export ====================================================================

export default CharCard;
