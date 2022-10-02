import React from 'react'

function PracticeOfProp({img , name, phone, email}) {

    // console.log(props)

  return (
    <>
        <img src={img}/>
        <h1>{name}</h1>
        <h3>{phone}</h3>
        <h5>{email}</h5>
    </>
  )
}

export default PracticeOfProp