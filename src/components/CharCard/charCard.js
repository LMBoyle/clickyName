import React from "react";
import "./charCard.css";

function CharCard(props) {
  return (
    <div className="card">
      <div className="img-container clicked" onClick={() => props.setClicked(props.id)}>
        <img alt={props.name} src={props.img} />
      </div>
    </div>
  );
}

export default CharCard;
