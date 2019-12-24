import React from "react";

const CatTile = (props) => {
let { catData, message } = props
  return(
    <div className="tile">
      <h4>{catData.name}</h4>
      <p>Breed: {catData.personality}</p>
      <p>Owner: {catData.human}</p>
      <p>{message}</p>
      <img src={catData.image} width="300"></img>
    </div>
  )
}

export default CatTile;
