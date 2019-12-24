import React from 'react';
import Wrapper from "./Wrapper"

const Numbers = props => {
  return (
    <div className='box numbers'>
    <h1>{props.header}</h1>
    {props.paragraph}
    </div>
  )
}

export default Numbers;
