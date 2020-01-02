import React, { useState } from 'react'
import Place from './Place'

const Map = (props) => {
  const [selectedId, setSelectedId] = useState(null)

  const destinationList = props.mapArray.map((placeObject) => {
    let selectedStatus = false

    if (placeObject.id === selectedId) {
      selectedStatus = true
    }

    let handleClickFunction = () => {
      if (placeObject.id === selectedId) {
        setSelectedId(null)
      } else {
        setSelectedId(placeObject.id)
      }
    }

    return(
      <Place
      key={placeObject.id}
      name={placeObject.name}
      selectedStatus={selectedStatus}
      onClickFunction={handleClickFunction}
      />
    )
  })

  return(

    <div className="box-div">
      {destinationList}
    </div>
  )
}

export default Map;
