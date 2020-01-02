import React, { useState } from 'react';
import Playlist from './Playlist'

const PlaylistCollection = (props) => {
  // debugger
  const [playlistId, setPlaylistId] = useState(null)

  const playlists = props.playlists.map(playlist => {

    let className;

    if(playlistId === playlist.id) {
      className = "selected"
    }

    const setPlaylistIdClosure = (event) => {
      setPlaylistId(playlist.id)
    }
    return(
      <Playlist
        key={playlist.id}
        playlist={playlist}
        setPlaylistIdClosure={setPlaylistIdClosure}
        className={className}
      />
    )
  })
  return (
    <div className="columns small-6">
      <h3>Playlist</h3>
      {playlists}
    </div>
  )
}

export default PlaylistCollection
