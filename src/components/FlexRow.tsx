import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface FlexRowProps {
    gap?: string;
    justify?: string;
    align?: string;
    children?: ReactNode;
}

const StyledFlexRow = styled.div<FlexRowProps>`
    display: flex;
    gap: ${props => props.gap === undefined ? "1em" : props.gap};
    justify-content: ${props => props.justify === undefined ? "flex-start" : props.justify};
    align-items: ${props => props.align === undefined ? "flex-start" : props.align};
`;

export default function FlexRow({ gap, justify, align, children }: FlexRowProps) {
    return (
        <StyledFlexRow gap={gap} justify={justify} align={align}>
            {children}
        </StyledFlexRow>
    );
};