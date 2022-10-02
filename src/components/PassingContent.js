import React from 'react'

function PassingContent(props) {

  return (
    <>
        <h1>{props.heading}</h1>
        <p>{props.content}</p>
        <hr/>
    </>
  )
}

export default PassingContent