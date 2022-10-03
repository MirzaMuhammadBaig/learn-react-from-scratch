import React from 'react'
// import Project2Body from './Project2Body'
// import Project2Data from './Project2Data'

function Project2Card(props) {

  let badgeText
  if(props.openSpots === 0){
    badgeText = 'Sold Out'
  }
  else if(props.badgeText !== 0){
    badgeText= 'Online'
  }

  return (
    <>
        <div>
          <div>{badgeText}</div>
          <img src={props.item.img} alt="" />
          <div>
            <span>★ {props.item.stats.rating}</span>
            <span>{props.item.stats.reviewCount} </span>
            <span> ●{props.item.location}</span>
          </div>
          <div>
            <p>{props.item.description}</p>
            <p>From ${props.item.price} / Person</p>
          </div> 
        </div>
    </>
  )
}

export default Project2Card