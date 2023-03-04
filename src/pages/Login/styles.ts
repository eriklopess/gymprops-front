import styled from 'styled-components';
import { Container } from '../../global';

export const LoginContainer = styled(Container)`
    justify-content: space-evenly;
`;

export const Form = styled.form`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    && label {
        display: block;
        font-size: 2rem;
        margin: 10px;
    }

    && label > input {
        border-radius: 5px;
        border: 1px solid #ccc;
        display: block;
        font-size: 1.5rem;
        padding: 10px;
    }

`;

export const Button = styled.button`
    background: rgba(255, 255, 255, 0.6);
    border-radius: 50px;
    border: none;
    color: #000;
    font-size: 1.5rem;
    margin-top: 1rem;
    margin: 10px;
    padding: 1rem 3rem;
    text-decoration: none;
`;
export const LoginImageBox = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 80vh;
    justify-content: center;
    width: 50%;
    && > img {
        object-fit: scale-down;
        opacity: 0.6;
        width: 100%;
    }

`;
