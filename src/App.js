import React, {useState, useEffect} from 'react';
import './App.css';
import Character from "./components/Character"
import axios from "axios"

function App() {

  const [charData, setCharData] = useState([]);

useEffect(() => {
console.log("fetching data")
axios.get("https://swapi.dev/api/people")
                    .then(res => setCharData(res.results))
                    .catch(err => console.log("Something went wrong!", err));
}, [])

console.log("charData2", charData)
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character charData={charData} />
    </div>
  );
}

export default App;
