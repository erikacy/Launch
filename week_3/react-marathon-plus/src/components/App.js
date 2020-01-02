import React from 'react'
import PlaylistCollection from './PlaylistCollection';
import SongCollection from './SongCollection';

const App = (props) => {
  // debugger
  return (
    <div className="app row callout">
      <h2 className="title">React Music Player</h2>

      <PlaylistCollection
        playlists={props.data.playlists}
       />
       <SongCollection
       songs={props.data.songs}
       />
    </div>

  );
}

export default App
