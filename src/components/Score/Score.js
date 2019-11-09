// Imports ===================================================================

import React from "react";
import "./Score.css";

// Functions =================================================================

function Score(props) {
  return <div className="score">{props.children}</div>;
}

// Export ====================================================================

export default Score;
