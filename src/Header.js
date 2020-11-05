import styled from 'styled-components/macro';

export default function Header() {
    return (
        <Container>
            <h1>onemoreminiround</h1>
            <Button class="menu-button">
                <svg
                    class="icon"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </Button>
        </Container>
    );
}

const Container = styled.header`
    position: relative;
    background-color: #2a9d8f;
    border-radius: 20px 20px 0 0;
    user-select: none;
`;

const Button = styled.button`
    width: 30px;
    color: white;
    background-color: transparent;
    border: none;
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 0;
    margin: 0.2rem;
    &:active,
    :focus {
        outline-color: #e76f51;
    }
`;
