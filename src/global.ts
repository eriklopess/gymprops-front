import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: rgb(104,227,221);
        --secondary-color: rgb(254,232,228);
    }

    * {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
    }

    body {
        ::-webkit-scrollbar {
            width: 5px;
        }
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
        }
        ::-webkit-scrollbar-thumb {
            background: #888;
        }
    }
`;

export const Container = styled.div`
    align-items: center;
    background: -moz-linear-gradient(40deg, var(--primary-color) 29%, var(--secondary-color) 100%);
    background: -webkit-linear-gradient(40deg, var(--primary-color) 29%, var(--secondary-color) 100%);
    background: linear-gradient(40deg, var(--primary-color) 29%, var(--secondary-color) 100%);
    background: var(--primary-color);
    display: flex;
    flex-direction: row;
    justify-content: center;
    min-height: 100vh;
    padding: 10px;
    width: 100%;
`;

export const Logo = styled.img`
    left: 30px;
    max-width: 100px;
    opacity: 1;
    position: absolute;
    top: 30px;
`;
