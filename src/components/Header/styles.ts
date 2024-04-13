import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  display: flex;
  background: #032612;
  box-shadow: 0 0 20px 3px;
  position: fixed;
  top: 0;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
`;

export const TestUserStyle = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-right: 3rem;
    align-items: center;
`;

export const BtnSignout = styled.button`
    background: transparent;
    border: none;
    color: #fff;
    padding: "10px";
    height: 3rem;
    width: 6rem;
    display: flex;
    padding: "10px";
    align-items: center;
    justify-content: center;
    gap: 4px;
    &:hover {
        background: #29292e;
        color: #8d8d99;
    }
`;