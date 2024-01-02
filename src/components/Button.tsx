import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
    color?: string;
    backgroundcolor?: string;
    txt?: string;
    padding?: string;
}

const StyledButton = styled.button<ButtonProps>`
    background: ${props => props.backgroundcolor === undefined ? "green" : props.backgroundcolor};
    color:  ${props => props.color === undefined ? "#FFFFFF" : props.color};
    padding: ${props => props.padding === undefined ? "10px 20px" : props.padding};
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    &:hover {
        box-shadow: 0 0 10px 10px #3498db;
        opacity: 0.8;
    }
    @media (max-width: 768px) {
        background: blue;
    }
`;

export default function Button({ color, backgroundcolor, padding, txt }: ButtonProps) {
    return (
        <StyledButton color={color} backgroundcolor={backgroundcolor} padding={padding}>{txt}</StyledButton>
    );
};