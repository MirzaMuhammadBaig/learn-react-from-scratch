import React from 'react'

function Map2() {

    const names = ["Mirza", "Abdullah", "Baig"]

    const lowerCase = names.map((items) => {

        //// as you wish you can write both ways 

        // return items[0].toLowerCase() + items.slice(1)
        return `${items[0].toLowerCase()}${items.slice(1)}`
    })

    console.log(names)

  return (
    <>
        <h1>{lowerCase[0]}</h1>
        <h1>{lowerCase[2]}</h1>
        <h1>{lowerCase[1]}</h1>
    </>
  )
}

export default Map2