import React from "react";
import Grocery from "./Grocery"

const GroceryList = (props) => {
  const GroceryItem = props.groceries.map((groceryObject) => {
    return(
      <Grocery
      key={groceryObject.id}
      item={groceryObject.name}
      buttonClick={props.handleButtonClick}
      />
    )
  })
debugger
  return(
    <div>
      <ul>
      {GroceryItem}
      </ul>
    </div>
  )
}

export default GroceryList;
