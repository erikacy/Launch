import React from 'react';

const Box = props => {
  let boxClass = `box ${props.boxClass}`

  let paragraph, list
  if (props.paragraph) {
    paragraph = <p>{props.paragraph}</p>
  } else if (props.list){
    list = <ul>{props.list}</ul>
  }

  return (
    <div className={boxClass}>
      <h1>{props.header}</h1>
      {paragraph}
    </div>
  )
}

export default Box;
