import styled from 'styled-components';

export const HomeTextBox = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 80vh;
    justify-content: center;
    width: 50%;
    && a {
        background: rgba(255, 255, 255, 0.6);
        border-radius: 50px;
        color: #000;
        font-size: 1.5rem;
        font-weight: 700;
        margin-top: 1rem;
        padding: 1rem 3rem;
        text-decoration: none;
    }

    && h1 {
        font-size: 4rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }

    && h2 {
        font-size: 3rem;
        font-weight: 400;
        margin-bottom: 1rem;
    }
`

export const HomeImageBox = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 80vh;
    justify-content: center;
    width: 40%;
    && > img {
        object-fit: scale-down;
        opacity: 0.6;
        width: 100%;
    }

`