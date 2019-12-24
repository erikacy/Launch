import React from 'react';
import Picture from './Picture';


const List = props => {
  return (
    <div className='box list'>
      <h1>{props.header}</h1>
      {props.list}
    </div>
  )
}

export default List;
