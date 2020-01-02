import React from 'react';

const Playlist = props => {
  return (
    <p className={props.className} onClick={props.setPlaylistIdClosure}>{props.playlist.name}</p>
  )
}

export default Playlist;
