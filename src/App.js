import React from "react";
import Project2Body from './components/Project2Body'
import Project2Data from "./components/Project2Data";
import Project2Card from "./components/Project2Card";

function App() {

  const cards = Project2Data.map(item => {
    return (
      <Project2Card
      key = {item.id}
      tag = {item.openSpots}
      img = {item.img}
      rating = {item.stats.rating}
      review = {item.stats.reviewCount}
      location = {item.location}
      desc = {item.description}
      price = {item.price}
      />  
    )
  })


  return (
    <>
      <Project2Body/>
      <section>
      {cards}
      </section>
    </>
  );
}

export default App;
