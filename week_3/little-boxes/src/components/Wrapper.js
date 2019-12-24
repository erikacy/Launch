import React from 'react';
import Picture from './Picture'
import Numbers from './Numbers'

let pictureImage = 'https://s3.amazonaws.com/horizon-production/images/react-clever-ees.png'

let date = (new Date).toString()
let random = parseInt(Math.random() * 100)

let numberParagraph = <p>Todays date is <strong>&nbsp;{date}&nbsp;</strong> and <em>&nbsp;{random}&nbsp;</em> is a random number.</p>

const Wrapper = props => {
  return (
    <div className='box wrapper'>
    <h1>{props.header}</h1>
    <p>{props.paragraph}</p>
    <Numbers
    header="Today's Date and Random Number"
    paragraph={numberParagraph}
    />
    <Picture
    header="Look at This Picture"
    src={pictureImage}/>
    </div>
  )
}

export default Wrapper;
