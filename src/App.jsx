import React from 'react'
import { useState } from "react"
import NavBar from "./component/NavBar"
import GameButtons from "./component/GameButtons"

const App = () => {

  // state setters
  const [selected, setSelected] = useState([]);
  const [completed, setCompleted] = useState([]);

  // functions
  const handleClick = (item) => {
    if (selected.length < 2) {
      setSelected([...selected, item.target.value]);
    } else {
      setSelected([item.target.value])
    }
  }

  return (
    <div className="App">
      <NavBar />
      <div className="p-4 m-auto">
        <GameButtons selected={selected} handleClick={handleClick} data={{ Germany: "Berlin", France: "Paris", Portugal: "Lisbon", Korea: "Seoul", Japan: "Tokyo" }} />
      </div>
    </div>
  )
}

export default App;
