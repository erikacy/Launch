import React from "react"

const DogTile = (props) => {

  return(
    <div className="tile">
      <h4>Name: {props.dogData.name}</h4>
      <p>Breed: {props.dogData.breed}</p>
      <p>Owner: {props.dogData.human}</p>
      {shameStatus}
      <img src={props.dogData.image} width="300"></img>
    </div>
  )
}
export default DogTile;
