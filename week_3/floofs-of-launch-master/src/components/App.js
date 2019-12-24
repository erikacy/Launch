import React from 'react';
import DogSection from './DogSection'
import CatSection from './CatSection'

const App = props => {
  return(
    <div className="app">
    <h1>Place not real Fluffballs here</h1>

      <DogSection
      dogsInfo={props.animals.dogs}/>

      <CatSection
      catInfo={props.animals.cats}/>
    </div>
  )
}

export default App;
