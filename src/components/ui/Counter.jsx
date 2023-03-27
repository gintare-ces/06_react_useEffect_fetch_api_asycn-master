import React, { useState, useEffect } from "react";
import Card from "./card/Card";
// susikuriam komponenta
function Counter() {
    const [count, setCount] = useState(0);
    const [colorClass, setColorClass] = useState('black')
    const style = {
    color: colorClass,
  }
//   jei counter daugiau uz 5 spalva taps zalia, jei maziau juoda
//   style.color = count > 5 ? 'green' : 'black'
  setTimeout(() => {
    document.title = "pakeista";
  }, 3000);


  function increase() {
    setCount((prevCount) => prevCount + 1)
  }

//   efektas pasileidzia tik susikurus komponentui
  useEffect(() => {
    setTimeout(() => {
        // setCount((prevCount) => prevCount + 1)
    }, 5000)
  }, [])

  useEffect(() => {
    console.log('pasikeite count', count);
    switch(true) {
        case count < 5:
            setColorClass( 'green')
            break;
        case count < 7:
            setColorClass( 'blue')
            break;
        case count < 11:
            setColorClass( 'red')
            break;
    }
  }, [count])
  

  return (
  <Card center>
    <h2 style={style}>{count}</h2>
    <button onClick={increase}>Plus</button>
  </Card>)
}
export default Counter;
// su setTimeout pakeisti title po 3sek
// pakeista.

// sukurti state, ir mygtuka kurio paspaudimu didinsim state
// state atvizduosim jsx
// state tadas butu zalias jei reiksme daugiau uz 5
// state tadas butu melynas jei reiksme daugiau uz 7
// state tadas butu raudonas jei reiksme daugiau uz 10
