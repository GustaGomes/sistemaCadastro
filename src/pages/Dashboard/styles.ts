import { shade } from 'polished';
import styled from 'styled-components'

export const DashboardContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const NewTransactionButton = styled.button`
    display: flex;
    height: 3rem;
    border: 0;
    background-color: #027368;
    color: #fff;
    padding: 0 1.25rem;
    border-radius: 6px;
    margin-right: 3rem;
    cursor: pointer;
    align-items: center;
    gap: 0.5rem;
  &:hover {
    background: ${shade(0.2, '#027368')};
    transition: background-color 0.2s;
  }
`;

export const HeaderComponent = styled.div`
  display: flex;
`

export const NewProfileContainer = styled.div`
    display: flex;
    width: 100%;
    margin-top: 8rem;
    margin-bottom: 2rem;
    justify-content: flex-end;
`