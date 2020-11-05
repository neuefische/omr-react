import styled from 'styled-components/macro';
import Header from './Header';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';
import Counter from './Counter';
import Characters from './Characters';
import Location from './Location';
import { useState } from 'react';

export default function App() {
    const [headlineText, setHeadlineText] = useState('onemoreminiround');

    function changeHeader(location) {
        setHeadlineText(location.location);
    }

    return (
        <AppContainer>
            <Minipage>
                <Header headline={headlineText} />
                <PageWrapper>
                    <Switch>
                        <Route path="/click">
                            <Counter />
                        </Route>
                        <Route path="/characters">
                            <Characters />
                        </Route>
                        <Route path="/locations">
                            <Location onSubmit={changeHeader} />
                        </Route>
                        <Route path="/">Home</Route>
                    </Switch>
                </PageWrapper>
                <Footer />
            </Minipage>
        </AppContainer>
    );
}

const PageWrapper = styled.main`
    display: grid;
    gap: 5px;
    place-items: center;
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
