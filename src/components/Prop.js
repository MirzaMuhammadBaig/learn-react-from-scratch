import React from 'react'

function Prop(props) {

    // console.log(props)

  return (
    <>
        <img src={props.img} />
        <h1>{props.name}</h1>
        <h1>{props.phone}</h1>
        <h1>{props.email}</h1>
    </>
  )
}

export default Prop