import React, { ReactNode } from 'react';
interface FlexRowProps {
    jarak?: string;
    justify?: string;
    align?: string;
    children?: ReactNode;
}
export default function FlexRow({ jarak, justify, align, children }: FlexRowProps): React.JSX.Element;
export {};
