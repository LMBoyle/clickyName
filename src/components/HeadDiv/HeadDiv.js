// Imports ===================================================================

import React from "react";
import "./HeadDiv.css";

// Functions =================================================================

function HeadDiv(props) {
  return <div className="headDiv">{props.children}</div>;
}

// Export ====================================================================

export default HeadDiv;
