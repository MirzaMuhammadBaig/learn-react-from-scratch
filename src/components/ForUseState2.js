import React, {useState} from 'react'

function ForUseState2() {

    const [isGoingOutside, setIsGoingOutside] = React.useState(true)

    function changeMind() {
        setIsGoingOutside (previousState => !previousState)
    }

  return (
    <> 
        <div>Do I feel like to go outside in night?</div>
        <div onClick={changeMind}>
            <h1>{isGoingOutside ? "Yes" : "No"}</h1>
        </div>
    </>
  )
}

export default ForUseState2