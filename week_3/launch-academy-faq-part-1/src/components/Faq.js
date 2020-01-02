import React, { useState } from 'react';
import Questions from './Questions'

const Faq = (props) => {
  const [selectedId, setSelectedId] = useState(null)

  const questionObject = props.data.map((question) => {
// debugger
    let selected = false;
    const setSelectedIdClosure = (event) => {
      event.preventDefault();
      if (selectedId === question.id) {
        setSelectedId(null)
      } else {
        setSelectedId(question.id)
      }
    }
    if (selectedId === question.id) {
      selected = true
    }

    return(
      <Questions
      key={question.id}
      question={question.question}
      answer={question.answer}
      selected={selected}
      onClickHandler={setSelectedIdClosure}
      />
    )
  })

  return(
    <div className="container">
    {questionObject}
    </div>
  )
}

export default Faq;
