// Write your Character component here
import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";




export default function Character(props) {

const [charData, setCharData] = useState([]);

useEffect(() => {

axios.get('https://swapi.dev/api/people')
                    .then(res => setCharData(res.results))
                    .catch(err => console.log("Something went wrong!", err))

}, [])

return (
    <div className="container">
        <h2>Name: {charData.name}</h2>
        <div>
            <p>Gender: {charData.gender}</p>
            <p>Homeworld: {charData.homeworld}</p>
            <ul>
                {charData.films.map((film) => <li key={film}>{film}</li>)}
            </ul>            
        </div>
    </div>
)
}


