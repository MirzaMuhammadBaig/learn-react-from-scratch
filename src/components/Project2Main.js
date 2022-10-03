import React from 'react'
import Project2Nav from './Project2Nav'
import '../SecondProject.css'
import College from '../img/college.jpg'

function Project2Main() {
    return (
        <>
            <Project2Nav />
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <img src={College} alt="College" className='college'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project2Main