import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const DashboardContainer = styled.div`
    padding-left: 300px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    && > div {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }
`;

export const TimelineContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;    
`;

export const TimelineItemContainer = styled.div`
    border: 1px solid #ccc;
    width: 500px;
    border-radius: 10px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 10px;
    }
    && > ul {
        width: 100%;
        max-height: 250px;
        margin: 0 auto;
    }
    && > ul > li {
        margin-bottom: 40px;
    }

    && > ul > li > div:first-of-type {
        flex: 0;
    }  
`;
