import React from 'react';
interface ButtonProps {
    isprimary?: boolean;
    color?: string;
    txt?: string;
}
export default function StkButton({ isprimary, color, txt }: ButtonProps): React.JSX.Element;
export {};
