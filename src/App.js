import styled from 'styled-components/macro';
import Header from './Header';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';

export default function App() {
    return (
        <AppContainer>
            <Minipage>
                <Header headline="onemoreminiround" />
                <PageWrapper>
                    <Switch>
                        <Route path="/click">State</Route>
                        <Route path="/characters">Characters</Route>
                        <Route path="/locations">Locations</Route>
                        <Route path="/">Home</Route>
                    </Switch>
                </PageWrapper>
                <Footer />
            </Minipage>
        </AppContainer>
    );
}

const PageWrapper = styled.main`
    background-color: #e76f51;
`;

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
