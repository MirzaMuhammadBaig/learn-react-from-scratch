import React from "react";
import  Time from "./components/Time"
import  PracticeOfProp from './components/PracticeOfProp'
import PassingContent from "./components/PassingContent";

function App() {

  return (
    <>
    <Time/>
    <PracticeOfProp
    img = "./components/img/logo192.png"
    name = 'React-1'
    phone = '+92 318 2207960'
    email = 'react1@gmail.com'
    />
    <PracticeOfProp
    img  = './components/img/logo192.png'
    name = 'React-2'
    phone = '+92 318 2207960'
    email = 'react2@gmail.com'
    />
    <PracticeOfProp
    img  = './components/img/logo192.png'
    name = 'React-3'
    phone = '+92 318 2207960'
    email = 'react3@gmail.com'
    />
    <PracticeOfProp
    img  = './components/img/logo192.png'
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
    </>
  );
}

export default App;
