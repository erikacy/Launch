import React, { useState } from 'react'
import PlaylistCollection from './PlaylistCollection';
import SongCollection from './SongCollection';

const App = (props) => {

  const [playlistId, setPlaylistId] = useState(null)
  let selectedPlaylistSongIds = []
  let selectedPlaylistSongs = []

  if(playlistId) {
    props.data.playlists.forEach((playlist) => {
      if (playlist.id === playlistId) {
        selectedPlaylistSongIds = playlist.songs
      }
    })
  }
  selectedPlaylistSongs = props.data.songs.filter((song) => {
    return(
      selectedPlaylistSongIds.includes(song.id)
    )
  })
  // debugger
  return (
    <div className="app row callout">
      <h2 className="title">React Music Player</h2>

      <PlaylistCollection
        playlists={props.data.playlists}
        setPlaylistId={setPlaylistId}
        playlistId={playlistId}
       />
       <SongCollection
       songs={selectedPlaylistSongs}
       />
    </div>

  );
}

export default App
