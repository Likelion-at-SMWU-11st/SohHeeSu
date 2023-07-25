import React from 'react';
import styled from "styled-components";

const StyledSubmit = styled.button`
    font-size: 20px;
    color: red; 
    border: 2px solid black;
    margin: 5px;
`;

const FunnyButton = () => {
    return (
            <StyledSubmit>SUBMIT</StyledSubmit>
    );
};

export default FunnyButton;