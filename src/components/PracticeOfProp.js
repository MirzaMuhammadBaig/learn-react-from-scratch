import React from 'react'

function PracticeOfProp(props) {

    // console.log(props)

  return (
    <>
        <img src={props.img}/>
        <h1>{props.name}</h1>
        <h3>{props.phone}</h3>
        <h5>{props.email}</h5>
        <hr/>
    </>
  )
}

export default PracticeOfProp

///// I can call values use in function-parameters throught them names.//////

// import React from 'react'

// function PracticeOfProp({img , name, phone, email}) {

//     // console.log(props)

//   return (
//     <>
//         <img src={img}/>
//         <h1>{name}</h1>
//         <h3>{phone}</h3>
//         <h5>{email}</h5>
//         <hr/>
//     </>
//   )
// }

// export default PracticeOfProp