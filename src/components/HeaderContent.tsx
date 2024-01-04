import React from 'react';
import styled from 'styled-components';

const WrapperHeader = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1em;
    background-color: #f5f5f5;
`;

const TopHeader = styled.div`
    /* Styles for TopHeader */
    background-color: #3498db;
    color: white;
    padding: 1em;
    text-align: center;
`;

const Header = styled.div`
    /* Styles for Header */
    background-color: #2c3e50;
    color: white;
    padding: 1em;
    text-align: center;
`;

export default function HeaderContent() {
    return (
        <WrapperHeader>
            <TopHeader>Component One</TopHeader>
            <Header>Component Two</Header>
        </WrapperHeader>
    );
};