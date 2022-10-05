import React, {useState} from 'react'

function Box(props) {

    const styles = {
        backgroundColor: props.on ? "black" : "transparent",
        width: '100px',
        height: '100px',
        border: '3px solid green',
        margin: '6px',
        display: 'inline-block'
    }

  return (
    <>
        <div style={styles}
            onClick = {props.toggle} 
            // onClick = {props.toggle(props.id)} 
        >     
        </div>
    </>
  )
}

export default Box