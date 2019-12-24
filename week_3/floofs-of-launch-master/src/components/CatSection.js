import React from "react"
import CatTile from './CatTile'

const CatSection = (props) => {

  const catBoxes = props.catInfo.map((catObject) => {
    return(
      <CatTile
      key={catObject.id}
      catData={catObject}
      message="kitty"
      />
    )
  })

  return(
    <div>
    {catBoxes}

    </div>
  )
}

export default CatSection;
