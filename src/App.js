import React, {useState, useEffect} from 'react';
import './App.css';
import Character from "./components/Character";
import axios from "axios";

function App() {

  const [charData, setCharData] = useState([]);

useEffect(() => {
console.log("fetching data")
axios.get("https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people")
                    .then(res => setCharData(res.data.results))
                    .catch(err => console.log("Something went wrong!", err));
}, [])

console.log("charData2", charData)
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      { charData.map(char => {
        return <Character key={char.name} charData={char} />
      })}
      </div>
      )
      
}

export default App;
