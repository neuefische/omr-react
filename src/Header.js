import styled from 'styled-components/macro';

export default function Header({ headline }) {
    return (
        <Container>
            <h1>{headline}</h1>
        </Container>
    );
}

const Container = styled.header`
    position: relative;
    background-color: #2a9d8f;
    border-radius: 20px 20px 0 0;
    user-select: none;
    padding: 0 30px;
`;
