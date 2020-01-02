import React from 'react';

const Questions = (props) => {
let answer;
let icons = "fas "

  if(props.selected === true) {
    answer = props.answer;
    icons += "fa-minus"
  } else {
    icons += "fa-plus"
  }


  return(
    <div className="row">
    <div className="columns small-1">
    <button type="button"><i className={icons} onClick={props.onClickHandler}></i></button>
    </div>
    <div className="question">{props.question}</div>
    <div className="answer">{answer}</div>
    <hr/>
    </div>
  )
}

export default Questions;
