import styled from 'styled-components/macro';
import Header from './Header';
import Page from './Page';
import Footer from './Footer';

export default function App() {
    return (
        <AppContainer>
            <Minipage>
                <Header headline="onemoreminiround" />
                <Page />
                <Footer />
            </Minipage>
        </AppContainer>
    );
}

const Minipage = styled.div`
    max-width: 470px;
    height: 55%;
    display: grid;
    grid-template-rows: 5rem auto 3rem;
`;

const AppContainer = styled.div`
    height: 100vh;
    margin: 0;
    display: grid;
    place-items: center;
    background-color: #264653;
    text-align: center;
`;
