import React from "react";
import Project2Body from './components/Project2Body'
// import Project2Data from "./components/Project2Data";
// import Project2Card from "./components/Project2Card";

import  Time from "./components/Time"
import  PracticeOfProp from './components/PracticeOfProp'
import PassingContent from "./components/PassingContent";
import PassDataInCard from "./components/PassDataInCard";
import MyImg from './img/logo192.png'
import MyImg2 from './img/FirstProject.jpeg'
import Map1 from './components/Map1'
import Map2 from './components/Map2'
import Map3 from './components/Map3'
import ForUseState from "./components/ForUseState";
import ForUseState2 from "./components/ForUseState2";
import PushNumberInThings from "./components/PushNumberInThings";
import boxes from "./components/boxes";
import Box from "./components/Box";
import Message from "./components/Message";

function App() {

  const [squares, setSquares] = React.useState(boxes)

  function toggle (id){

    setSquares(squares => {
      return squares.map((square) => {
        return square.id === id ? {...square, on: !square.on} : square
      })
    })
    
    // setSquares(preSquares => {
    //   const newSquares = []
    //   for(let i = 0; i < preSquares.length; i++){
    //     const currentSqaure = preSquares[i]
    //     if(currentSqaure.id === id){
    //       const updateSquare = {
    //         ...currentSqaure,
    //         on : !currentSqaure.on
    //       }
    //       newSquares.push(updateSquare)
    //     }
    //     else {
    //       newSquares.push(currentSqaure)
    //     }
    //   }
    //   return newSquares
    // })

  }

  const squareElement = squares.map(item => (
    <Box 
       key = {item.id}
       id = {item.id}
       on = {item.on}
       toggle = {() => toggle(item.id)}
    />
  ))


  // const cards = Project2Data.map(item => {
  //   return (
  //     <Project2Card
  //     key = {item.id}
  //     tag = {item.openSpots}
  //     img = {item.img}
  //     rating = {item.stats.rating}
  //     review = {item.stats.reviewCount}
  //     location = {item.location}
  //     desc = {item.description}
  //     price = {item.price}
  //     />  
  //   )
  // })


  return (
    <>
    <Message/>
    {squareElement}
      <Project2Body/>
      {/* <section>
      {cards}
      </section> */}
    <Time/>
    <PracticeOfProp
    img = {MyImg}
    name = 'React-1'
    phone = '+92 318 2207960'
    email = 'react1@gmail.com'
    />
    <PracticeOfProp
    img  = {MyImg}
    name = 'React-2'
    phone = '+92 318 2207960'
    email = 'react2@gmail.com'
    />
    <PracticeOfProp
    img  = {MyImg}
    name = 'React-3'
    phone = '+92 318 2207960'
    email = 'react3@gmail.com'
    />
    <PracticeOfProp
    img  = {MyImg}
    name = 'React-4'
    phone = '+92 318 2207960'
    email = 'react4@gmail.com'
    />
    <PassingContent
    heading = 'Abullah is a nice guy'
    content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi accusamus velit dicta numquam consequuntur magni modi tempora perferendis, consectetur vel quos maiores, enim possimus atque labore commodi ut quod? Facilis laborum magni esse labore incidunt adipisci fugiat, corporis soluta omnis eveniet impedit nihil error.'
    />
    <PassingContent
    heading = 'Muhammad is a nice guy'
    content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi accusamus velit dicta numquam consequuntur magni modi tempora perferendis, consectetur vel quos maiores, enim possimus atque labore commodi ut quod? Facilis laborum magni esse labore incidunt adipisci fugiat, corporis soluta omnis eveniet impedit nihil error.'
    />
    <PassingContent
    heading = 'Kashan is a nice guy'
    content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi accusamus velit dicta numquam consequuntur magni modi tempora perferendis, consectetur vel quos maiores, enim possimus atque labore commodi ut quod? Facilis laborum magni esse labore incidunt adipisci fugiat, corporis soluta omnis eveniet impedit nihil error.'
    />
    <PassingContent
    heading = 'Haider is a nice guy'
    content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi accusamus velit dicta numquam consequuntur magni modi tempora perferendis, consectetur vel quos maiores, enim possimus atque labore commodi ut quod? Facilis laborum magni esse labore incidunt adipisci fugiat, corporis soluta omnis eveniet impedit nihil error.'
    />
    <PassDataInCard
      img = {MyImg} 
      image = {MyImg2}
      firstSpan = 'star 5.0'
      secondSpan = ' (6) . USA'
      p = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      thirdSpan = "From $136"
      fourthSpan = " / person "
    />
  <Map1/>
  <Map2/>
  <Map3/>
  <ForUseState/>
  <ForUseState2/>
  <PushNumberInThings/>
  <div>
  <squreElements/>
  </div>
    </>
  );
}

export default App;
