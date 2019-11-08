// Imports ===================================================================

import React from "react";
import "./charCard.css";

// Functions =================================================================
  function Char(props) {
    const { id, name, img } = props.character;

    return (
      <div className="img-container" id={id}>
        <img 
          alt={name} 
          src={img} 
        />
      </div>
    )
  }

// Export ====================================================================

export default Char