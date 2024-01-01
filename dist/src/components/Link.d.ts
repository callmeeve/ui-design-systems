import React from 'react';
interface LinkProps {
    href: string;
    target?: string;
    label?: string;
    color?: string;
}
export default function Link({ href, target, label, color }: LinkProps): React.JSX.Element;
export {};
