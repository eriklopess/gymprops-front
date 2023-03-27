import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const StatsContainer = styled.div`
    display: inline-flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    margin: 20px;
    min-width: 200px;
    && h2 {
        font-size: 1.2rem;
    }
    && p {
        font-size: 1.2rem;
        font-weight: 700;
        color: #000;
        display: inline-block;
    }

    && span {
        font-size: 1rem;
        font-weight: 700;
        display: inline;
        margin-left: 5px;
        color: green;
    }

    && svg {
        margin-left: 30px;
        color: #fff;
        font-size: 3rem;
        background-color: #000;
        border-radius: 10px;
        padding: 10px;
    }
`;
