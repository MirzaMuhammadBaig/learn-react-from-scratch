import React, {useState } from 'react'

function ForUseState() {

    let [Number, setNumber] = React.useState(0)

    function addNumber (){
        // setNumber (Number + 1);
        // setNumber (Number++);
        // setNumber (++Number);
        // setNumber (Number = Number + 1);
        // setNumber (function (Number) {
        //     return Number + 1
        // });
        setNumber (Number => Number + 1);
    }

    function subNumber (){
        // setNumber ( Number - 1);
        // setNumber ( Number--); result will be show after double click
        // setNumber ( --Number);
        // setNumber ( Number = Number - 1);
        // setNumber (function (Number) {
        //     return Number - 1;
        // })
        setNumber (Number => Number - 1)
    }

  return (
    <>
    <br />
    <button onClick={addNumber}>ClickMeForAddNumber</button>
    <div >{Number}</div>
    <button onClick={subNumber}>ClickMeForSubNumber</button>
    </>
  )
}

export default ForUseState