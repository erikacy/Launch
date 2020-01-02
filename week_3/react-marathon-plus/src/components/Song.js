import React from 'react';

const Song = props => {
  return(
    <p className={props.className} onClick={props.handleClick}>{props.song.name} - {props.song.artist}</p>
  )
}

export default Song;
