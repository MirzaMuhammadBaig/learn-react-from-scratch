import React, {useState} from 'react'

function PushNumberInThings() {

    const [things, setThings] = React.useState(["Thing 1", "Thing 2"])

    function addItems () {
        setThings (preThings =>{
           return [...preThings, `Thing ${preThings.length + 1}`]
        })
    }

  return (
    <>
        <button onClick={addItems}>Cleck Me For Add More Things</button>
        {things}
    </>
  )
}

export default PushNumberInThings