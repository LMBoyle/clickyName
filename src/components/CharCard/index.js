import React from "react";
import "./style.css";

function CharCard(props) {
  return (
    <div className="card">
      <div className="img-container" onClick={() => props.setClicked(props.id)} className="clicked">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default CharCard;
