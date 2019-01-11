import React from "react";

const DisplayCharacter = props => {
  return (
    <div className="character">
      <p className="name">Name: {props.characterName}</p>
      <p className="gender">Gender: {props.gender}</p>
      <p className="height">Height: {props.height}</p>
    </div>
  );
};

export default DisplayCharacter;
