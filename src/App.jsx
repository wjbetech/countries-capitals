import React from 'react'
import NavBar from "./component/NavBar"

function GameButtons({ data }) {

  const countries = Object.keys(data)
  const capitals = Object.values(data)
  const options = [...countries, ...capitals]
  console.log(options)

  return (
    <div>
      {options.map((o) => (
        <button className="btn btn-accent btn-sm" key={o}>{o}</button>
      ))}
    </div>
  )
}


const App = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="w-full gap-4 m-auto p-4 grid sm:grid-cols-2 lg:grid-cols-4">
        <GameButtons data={{ Germany: "Berlin", France: "Paris" }} />
      </div>
    </div>
  )
}

export default App;
