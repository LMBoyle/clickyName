import React from "react";
import './Alert.css';

function Alert(props) {
  return (
    <div
      role="alert"
      className={`alert alert-${props.type} fade in`}
      style={{ width: "80%", margin: "0 auto", marginTop: 18, ...props.style }}
    >
      {props.children}

    <button type="button" onClick={props.onClick} className="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>

    </div>
  );
}

export default Alert;
