// Imports ===================================================================

import React from "react";
import "./wrapper.css";

// Functions =================================================================

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

// Export ====================================================================

export default Wrapper;
