import React from 'react'

function PassingContent(props) {

  return (
    <>
        {props.heading && <h1> Heading : {props.heading}</h1>}
        {props.content && <p>Content: {props.content}</p>}

        

        {/* from this sort  I can do that if any item or data no consist then it will be not show*/}
        {/* <h1 style = {{display: props.setup ? "block" : "none"}}>Heading :{props.heading}</h1>
        <p>Content:{props.content}</p> */}
        <hr/>
    </>
  )
}

export default PassingContent