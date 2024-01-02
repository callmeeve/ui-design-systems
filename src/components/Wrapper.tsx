import React, {ReactNode} from 'react';
import styled from 'styled-components';

interface WrapperProps {
    padding?: string;
    margin?: string;
    children?: ReactNode;
}

const StyledWrapper = styled.div<WrapperProps>`
    padding: ${props => props.padding || "1em"};
    margin: ${props => props.margin || "1em"};

    @media (max-width: 768px) {
        padding: ${props => props.padding || "0.5em"};
        margin: ${props => props.margin || "0.5em"};
    }
`;

export default function Wrapper({ padding, margin, children }: WrapperProps) {
    return (
        <StyledWrapper padding={padding} margin={margin}>
            {children}
        </StyledWrapper>
    );
};