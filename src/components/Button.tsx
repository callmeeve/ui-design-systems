import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
    isprimary?: boolean;
    color?: string;
    txt?: string;
}

const StyledButton = styled.button<ButtonProps>`
    background: ${props => props.color === undefined ? "green" : props.color};
    color:  ${props => props.isprimary ? "white" : "black"};
    padding: 1em;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    &:hover {
        box-shadow: 0 0 10px 10px #3498db;
        background: transparent;
        color: #FFFFFF;
    }
    @media (max-width: 768px) {
        background: blue;
    }
`;

export default function Button({ isprimary, color, txt }: ButtonProps) {
    return (
        <StyledButton isprimary={isprimary} color={color}>{txt}</StyledButton>
    );
};