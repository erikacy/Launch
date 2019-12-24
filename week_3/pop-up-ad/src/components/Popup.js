import React from "react"

const Popup = props => {
  let handleExit = () => {
    confirm("Are you sure you don't want to see xyz?")
  }

  return(
    <div className="wrapper">
    <div className="xicon" onClick={handleExit}>
    <i className="fas fa-times"></i></div>

    <h3>You have won tickets to see {props.artist}!!</h3>
    <label> Please enter your email so we can send you the tickets</label>

    <form>
      <div className="row">
        <div className="medium-12 columns">
          <div className="input-group">
            <input className="input-group-field" placeholder="Email" type="text"></input>
            <div className="input-group-button">
              <input type="submit" className="buttonBox" value="CLAIM YOUR PRIZE"></input>
            </div>
          </div>
        </div>
      </div>
    </form>

    </div>

  );
};

export default Popup
