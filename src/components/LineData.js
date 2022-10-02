import React from 'react'

function LineData(props) {


  return (
    <>

        {props.FirstLine && <p>FirstLine: {props.FirstLine}</p>}
        {props.SecondLine && <p>SecondLine: {props.SecondLine}</p>}
        <hr/>
    </>
  )
}

export default LineData