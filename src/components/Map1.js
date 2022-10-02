import React from 'react'

function Map1() {

    const numArray = [1,2,3,4,5,6,7] 

    const multiplayNumbers = numArray.map(function (item) {
       return item * item
    })

    console.log(multiplayNumbers)

  return (
    <>
        <p>{multiplayNumbers}</p>
    </>
  )
}

export default Map1