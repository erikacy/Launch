import React from 'react';
import List from './List'
import Numbers from './Wrapper'

let list = ['Asteroids', 'Comets', 'Moon', 'Planets', 'Stars', 'Sun']

const Picture = props => {
  return (
    <div className='box picture'>
      <h1>Look at This Picture</h1>
      <img alt='Clever EEs' src={props.src}/>
      <List
      header="Here Is a List"
      list={list}
       />
    </div>
  )
}

export default Picture;
