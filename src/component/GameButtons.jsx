function GameButtons({ data, handleClick, selected }) {

  const countries = Object.keys(data)
  const capitals = Object.values(data)
  const options = [...countries, ...capitals]

  function generateRandomId() {
    const randomNum = Math.floor(Math.random() * 0xFFFFFF).toString(8).toLowerCase();
    return '0000000'.slice(0, 8 - randomNum.length) + randomNum
  }

  const mappedOptions = options.map(item => ({
    item, id: generateRandomId()
  })).sort((a, b) => a.id - b.id);

  if (selected.value === countries[capitals.value]
     || capitals[selected.value] === countries.value) {
        console.log("Correct!")
     }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 m-auto gap-2">
      {mappedOptions.map((option) => (
        <button
          className={`btn btn-sm ${selected.includes(option.item) ? "selected cursor-not-allowed" : "btn-warning"}`}
          onClick={handleClick}
          key={option.id}
          value={option.item}
        >
        {option.item}
        </button>
      ))}
    </div>
  )
}

export default GameButtons;
