import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Characters() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
            .then((res) => res.json())
            .then((data) => setCharacters(data.results))
            .catch((error) => console.log(error));
    }, []);

    return (
        <ImageWrapper>
            {characters.map((character) => {
                return <img key={character.id} src={character.image} />;
            })}
        </ImageWrapper>
    );
}

const ImageWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;

    img {
        margin: 4px;
        width: 50px;
        height: 50px;
        border-radius: 5px;
    }
`;
