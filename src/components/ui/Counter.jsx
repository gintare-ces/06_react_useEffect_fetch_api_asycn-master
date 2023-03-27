import React, { useState, useEffect } from "react";
import Card from "./card/Card";
// susikuriam komponenta
function Counter() {
    const [count, setCount] = useState(0)
  setTimeout(() => {
    document.title = "pakeista";
  }, 3000);


  function increase() {
    setCount(count + 1)
  }

  return (
  <Card center>
    <h2>{count}</h2>
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
