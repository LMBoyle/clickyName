import React from "react";
import './Alert.css';

function Alert(props) {
  return (
    <div
      role="alert"
      className={`alert alert-${props.type} ${props.show}`}
      style={{ ...props.style }}
    >
      {props.children}

    <button type="button" onClick={props.onClick} className="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>

    </div>
  );
}

export default Alert;
