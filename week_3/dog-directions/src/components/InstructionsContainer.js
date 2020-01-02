import React, { useState } from "react"
import StepTile from "./StepTile"
import ItemTile from "./ItemTile"
import FetchButton from "./FetchButton"

const InstructionsContainer = props => {
  // const supplies = props.data.supplies
  // const directions = props.data.directions
  const [selectedId, setSelectedStep] = useState(null)
  const [favoriteTask, setFavoriteTask] = useState(null)
  let supplies, directions, items, steps

  const fetchData = (event) => {
    event.preventDefault()
    fetch('http://localhost:4567/api/v1/favorite_things.json')
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        let errorMessage = `${response.status } (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(jsonResponse => { setFavoriteTask(jsonResponse)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  if (favoriteTask) {
    supplies = favoriteTask.supplies
    directions = favoriteTask.directions

    items = supplies.map(supply => {
      return (
        <ItemTile
        item={supply.item}
        key={supply.id}
        id={supply.id}
        />
      )
    })

    steps = directions.map(direction => {
      let className
      if (direction.id === selectedId) {
        className = "selected"
      }
      const setSelectedStepClosure = () => {
        return setSelectedStep(direction.id)
      }
      return (
        <StepTile
        step={direction.step}
        key={direction.id}
        id={direction.id}
        className={className}
        setSelectedStepClosure={setSelectedStepClosure}
        />
      )
    })
    return (
      <div>
      <h1>How To {props.data.activity}</h1>
      <h3>Supplies:</h3>
      <ul>{items}</ul>
      <h3>Instructions:</h3>
      <ol>{steps}</ol>
      <FetchButton
      fetchData={fetchData}/>
      </div>
    )
  } else {
    return(
      <FetchButton
      fetchData={fetchData}
      />
    )
  }
}

export default InstructionsContainer
