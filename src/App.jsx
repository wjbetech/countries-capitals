import React from 'react'
import NavBar from "./component/NavBar"
import data from "../data.json"

const App = () => {

  console.log(data.reduce((d) => d.capitalCity))

  return (
    <div className="App">
      <NavBar />
      {data.map(d => (
        <div></div>
      ))}
    </div>
  )
}

export default App
