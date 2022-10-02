import React from "react";
import  Time from "./components/Time"
import  Prop from './components/Prop'

function App() {

  return (
    <>
    <Time/>
    <Prop
    img = "./components/img/logo192.png"
    name = 'React-1'
    phone = '+92 318 2207960'
    email = 'react1@gmail.com'
    />
    <Prop
    img  = './components/img/logo192.png'
    name = 'React-2'
    phone = '+92 318 2207960'
    email = 'react2@gmail.com'
    />
    <Prop
    img  = './components/img/logo192.png'
    name = 'React-3'
    phone = '+92 318 2207960'
    email = 'react3@gmail.com'
    />
    <Prop
    img  = './components/img/logo192.png'
    name = 'React-4'
    phone = '+92 318 2207960'
    email = 'react4@gmail.com'
    />
    </>
  );
}

export default App;
