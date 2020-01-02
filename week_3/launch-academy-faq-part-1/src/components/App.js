import React from 'react'
import Faq from './Faq'

const App = (props) => {
  return(
    <div className="app">
      <h1 className="header text-center">We're here to help</h1>
      <Faq
       data={props.data}
	      />
	    </div>
  )
}

export default App;
