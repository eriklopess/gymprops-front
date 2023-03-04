import styled from 'styled-components';

export const SidebarContainer = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px;
  width: 300px;
  && img {
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    margin: 0 auto;
    margin-bottom: 20px;
  }
  && div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  && a {
    color: #000;
    font-size: 1.2rem;
    font-weight: 700;
    margin-top: 1rem;
    text-decoration: none;
    padding: 0.5rem;
    padding-left: 15px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    & span {
        margin-right: 20px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        border-radius: 10px;
        background: #fff;
        color: #000;
    }
}

&& .active {
        background: rgba(0, 0, 0, 0.1);
        & span {
            color: #fff;
            background: #000;
        }
    }
`;

export const SidebarHeader = styled.div``;
