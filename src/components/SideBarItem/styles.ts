import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: "fff";
  padding: 10px;
  margin-top: 0.3rem;
  height: 4rem;
  cursor: pointer;
  > svg {
    margin: 0 20px;
  }

  &:hover {
        background: #011f26;
        color: #fff;
    }
`;