import React, { useState } from 'react'
import Song from './Song'

const SongCollection = (props) => {
  const [songId, setSongId] = useState(null)

  const songList = props.songs.map(song => {
    const handleClick = () => {
      setSongId(song.id)
    }

    let className;
    if (song.id === songId) {
      className = "selected"
    }

    return (
      <Song
        key={song.id}
        song={song}
        handleClick={handleClick}
        className={className}
      />
    )
  })

  return (
    <div className="columns small-6">
      <h3>Songs</h3>
      {songList}
    </div>
  )
}

export default SongCollection
