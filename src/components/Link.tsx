import React from 'react';
import styled from 'styled-components';

interface LinkProps {
    href: string;
    target?: string;
    label?: string;
    color?: string;
}

const StyledLink = styled.a<LinkProps>`
    color: ${props => props.color !== undefined ? props.color : '#FFFFFF'};
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

export default function Link({ href, target, label, color }: LinkProps) {
    return (
        <StyledLink href={href} target={target} color={color}>{label}</StyledLink>
    );
};