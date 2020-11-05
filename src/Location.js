import { useState } from 'react';
import styled from 'styled-components';

export default function Location() {
    const [locations, setLocations] = useState([]);
    const [formData, setFormData] = useState({ location: '' });

    return (
        <>
            <ul>
                Your locations:
                {locations.map((location, index) => {
                    return <li key={index}>{location.location}</li>;
                })}
            </ul>
            <Form onSubmit={handleSubmit}>
                <label>
                    Add location:
                    <input
                        type="text"
                        value={formData.location}
                        onChange={handleChange}
                        name="location"
                    />
                </label>
                <button>Ship it!</button>
            </Form>
        </>
    );

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        setLocations([...locations, formData]);
    }
}

const Form = styled.form`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;

    input {
        margin-left: 12px;
    }
`;
