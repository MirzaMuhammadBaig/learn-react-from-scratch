import React from 'react'
import Image from '../img/logo192.png'
import '../FirstProject.css'

function FirstProject() {
  return (
    <>
        <navbar className='navbar1'>
            <img src={Image} alt="logo" />
            <h1>ReactFacts</h1>
            <h3>React Course-Project 1</h3>
        </navbar>
        <section>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jorden Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </section>
    </>
  )
}

export default FirstProject