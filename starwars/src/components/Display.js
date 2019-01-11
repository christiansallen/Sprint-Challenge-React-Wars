import React from "react";
import DisplayCharacter from "./DisplayCharacter";

const Display = props => {
  return (
    <div>
      {props.characterList.map(character => {
        return (
          <DisplayCharacter
            characterName={character.name}
            gender={character.gender}
            height={character.height}
          />
        );
      })}
    </div>
  );
};

export default Display;
