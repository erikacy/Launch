import React, { useState } from 'react'

const Place = (props) => {
  // debugger
  let travelDestination = props.name

  let classes = "travel"
  if (props.selectedStatus) {
    classes += " done"
  }

  return(
    <div className={classes} onClick={props.onClickFunction}>{travelDestination}
    </div>
  )
}

export default Place;
