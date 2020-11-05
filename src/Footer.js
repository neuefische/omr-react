import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import { ReactComponent as HomeLogo } from './assets/icons/home.svg';
import { ReactComponent as ClickLogo } from './assets/icons/click.svg';
import { ReactComponent as CharactersLogo } from './assets/icons/characters.svg';
import { ReactComponent as LocationsLogo } from './assets/icons/locations.svg';

export default function Footer() {
    return (
        <Container>
            <NavBar>
                <NavLink exact to="/">
                    <HomeLogo />
                </NavLink>
                <NavLink to="/click">
                    <ClickLogo />
                </NavLink>
                <NavLink to="/characters">
                    <CharactersLogo />
                </NavLink>
                <NavLink to="/locations">
                    <LocationsLogo />
                </NavLink>
            </NavBar>
        </Container>
    );
}

const Container = styled.footer`
    background-color: #2a9d8f;
    border-radius: 0 0 20px 20px;
`;

const NavBar = styled.nav`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(4, 1fr);
    & > a {
        padding: 0.3rem 1rem 0 1rem;
        color: white;
    }
    .active {
        color: #264653;
    }
`;
