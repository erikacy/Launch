import React from "react"

const Grocery = (props) => {
  return(
    <div>
      <li>
      {props.item}
      <button onClick={props.buttonClick}>Delete</button>
      </li>
    </div>
  )
}

export default Grocery;
