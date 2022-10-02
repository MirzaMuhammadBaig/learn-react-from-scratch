import React from 'react'
import '../Card.css'

function PassDataInCard(props) {

  return (
    <section>
        <nav>
            <img src={props.img}/>
        </nav>
        <img src={props.image}/>
        <p><span>{props.firstSpan}</span><span className='gray'> {props.secondSpan}</span></p>
        <p>{props.p}</p>
        <p><span className='bold'><strong>{props.thirdSpan}</strong></span><span> {props.fourthSpan} </span></p>
    </section>
  )
}

export default PassDataInCard