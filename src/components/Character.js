// Write your Character component here
import React from "react";
import styled from "styled-components";



const Container = styled.div`
    width: 75%;
    height: 15%;
    background-color: ${props => props.theme.secondaryColor};
    margin: 1% auto;
    padding: 1%;
    border-radius: 10%
`

const CharName = styled.h2`
    color: ${props => props.theme.primaryColor};
    // margin-left: 3%;
`

const CharCard = styled.div`
    width: 94%;
    background-color: ${props => props.theme.tertiaryColor};
    margin: 1% auto;
    padding: 1%;
    border-radius: 10%
`

const CharInfo = styled.p`
    color: ${props => props.theme.secondaryColor}; 
`
const FilmInfo = styled.ul`
    color: ${props => props.theme.primaryColor};
`

export default function Character(props) {

    const {charData} = props

    // console.log("name", charData.name)
    // console.log("gender", charData.gender)
    // console.log("homeworld", charData.homeworld)
    // console.log("films", charData.films)

return (
    <Container>
        <CharName>Name: {charData.name}</CharName>
        <CharCard>
            <CharInfo>Gender: {charData.gender}</CharInfo>
            <CharInfo>Birthyear: {charData.birth_year}</CharInfo>
            <CharInfo>Films: {charData.films.length}</CharInfo>
        </CharCard>
    </Container>
)
}


