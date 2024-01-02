import React from 'react';
interface ButtonProps {
    color?: string;
    backgroundcolor?: string;
    txt?: string;
    padding?: string;
}
export default function Button({ color, backgroundcolor, padding, txt }: ButtonProps): React.JSX.Element;
export {};
