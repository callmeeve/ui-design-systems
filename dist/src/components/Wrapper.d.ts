import React, { ReactNode } from 'react';
interface WrapperProps {
    padding?: string;
    margin?: string;
    children?: ReactNode;
}
export default function Wrapper({ padding, margin, children }: WrapperProps): React.JSX.Element;
export {};
