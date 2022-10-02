import React from 'react'

function Map3() {

    const Names = ['Muhammad', "Abdullah", "Kashan" ,"Haider", "Andurehman" ,"Arsalan"]

    const convertInPtag = Names.map((items) => {
        return `<p>${items}</p>`
    })

    console.log(convertInPtag)

  return (
    <>
       Brother And Friends: {convertInPtag}
    </>
  )
}

export default Map3