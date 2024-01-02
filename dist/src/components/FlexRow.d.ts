import React, { ReactNode } from 'react';
interface FlexRowProps {
    gap?: string;
    justify?: string;
    align?: string;
    children?: ReactNode;
}
export default function FlexRow({ gap, justify, align, children }: FlexRowProps): React.JSX.Element;
export {};
