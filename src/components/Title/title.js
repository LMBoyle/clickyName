// Imports ===================================================================

import React from "react";
import "./title.css";

// Functions =================================================================

function Title(props) {
  return <h1 className="title">{props.children}</h1>;
}

// Export ====================================================================

export default Title;
