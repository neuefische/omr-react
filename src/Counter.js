import { useState } from 'react';
import styled from 'styled-components';

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
            <p>{count}</p>
            <ButtonWrapper>
                <button onClick={() => setCount(count + 1)}>+</button>
                <button onClick={() => setCount(count - 1)}>-</button>
            </ButtonWrapper>
        </>
    );
}

const ButtonWrapper = styled.div`
    display: flex;
`;
