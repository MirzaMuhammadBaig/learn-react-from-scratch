import React from 'react'

function Time() {

    const date = new Date();
    const hours = date.getHours()

    let timeOfDay
    if(hours < 12 && hours > 6){
        timeOfDay = "morning"
    }
    else if(hours > 12 && hours < 8){
        timeOfDay = "evening"
    }
    else{
        timeOfDay = "night"
    }

  return (
    <>
        Good {timeOfDay} 
        <br></br>
        It's {hours} o'clock
    </>
  )
}

export default Time