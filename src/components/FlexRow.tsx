import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface FlexRowProps {
    jarak?: string;
    justify?: string;
    align?: string;
    children?: ReactNode;
}

const StyledFlexRow = styled.div<FlexRowProps>`
    display: flex;
    gap: ${props => props.jarak === undefined ? "1em" : props.jarak};
    justify-content: ${props => props.justify === undefined ? "flex-start" : props.justify};
    align-items: ${props => props.align === undefined ? "flex-start" : props.align};
`;

export default function FlexRow({ jarak, justify, align, children }: FlexRowProps) {
    return (
        <StyledFlexRow jarak={jarak} justify={justify} align={align}>
            {children}
        </StyledFlexRow>
    );
};