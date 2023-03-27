import styled from 'styled-components';
import { DashboardContainer } from '../style';

export const EnrollContainer = styled(DashboardContainer)`
    padding: 50px;
    padding-left: 350px;
    && table {
        width: 90%;
        margin: 0 auto;
        border: 1px solid #ccc;
        border-collapse: collapse;
        & th {
            border-radius: 20px;
            border: 1px solid #ccc;
            padding: 10px;
        }
        & td {
            border: 1px solid #ccc;
        }
    }
`;

export const EnrollItemContainer = styled.div`
    border: 1px solid #ccc;
    width: 500px;
`;

export const ActionButton = styled.button`
    border: none;
    background-color: transparent;
    width: 100%;
    height: 100%;
    color: ${(props) => props.color};
    text-decoration: none;
    font-size: 1.5rem;
    cursor: pointer;
`;
