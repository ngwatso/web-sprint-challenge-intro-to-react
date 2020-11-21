// Write your Character component here
import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";



const Container = styled.div`
    width: 75%;
    height: 15%;
    background-color: ${props => props.theme.secondaryColor};
    margin: 1% auto;
    padding: 1%;
`

const CharName = styled.h2`
    color: ${props => props.theme.primaryColor};
    margin-left: 3%;
`

const CharCard = styled.div`
    width: 94%;
    background-color: ${props => props.theme.tertiaryColor};
    margin: 1% auto;
    padding: 1%;
`

const CharInfo = styled.p`
    color: ${props => props.theme.primaryColor}; 
`
const FilmInfo = styled.ul`
    color: ${props => props.theme.primaryColor};
`

export default function Character(props) {

const [charData, setCharData] = useState([]);

useEffect(() => {

axios.get('https://swapi.dev/api/people')
                    .then(res => setCharData(res.results))
                    .catch(err => console.log("Something went wrong!", err))

}, [])

return (
    <Container>
        <CharName>Name: {charData.name}</CharName>
        <CharCard>
            <CharInfo>Gender: {charData.gender}</CharInfo>
            <CharInfo>Homeworld: {charData.homeworld}</CharInfo>
            <FilmInfo>
                Films: {charData.films.map((film) => <li key={film}>{film}</li>)}
            </FilmInfo>            
        </CharCard>
    </Container>
)
}


