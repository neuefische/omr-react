import styled from 'styled-components/macro';
import Header from './Header';
import Page from './Page';

export default function App() {
    return (
        <AppContainer>
            <Minipage>
                <Header />
                <Page />
            </Minipage>
        </AppContainer>
    );
}

const Minipage = styled.div`
    width: 60%;
    max-width: 470px;
    height: 35%;
    display: flex;
    flex-flow: column nowrap;
`;

const AppContainer = styled.div`
    height: 100vh;
    margin: 0;
    display: grid;
    place-items: center;
    background-color: #264653;
    text-align: center;
`;
