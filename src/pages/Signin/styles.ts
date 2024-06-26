import styled from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/trofeu.jpg';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
    background: #121414;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;   
    width: 100%;
    max-width: 700px;
    form {
      margin: 30px 0;
      width: 340px;
      text-align: center;
    }
    h1 {
      margin-bottom: 24px;
    }
    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;
      &:hover {
          color: ${shade(0.2, '#f4ede8')};
      }
    }
     > a {
         color: #f4ede8;
         display: block;
         margin-top: 24px;
         text-decoration: none;
         transition: color 0.2s;
         display: flex;
         align-items: center;
         svg {
             margin-right: 16px;
         }
         &:hover {
             color: ${shade(0.2, '#f4ede8')};
         }
     } 
`;

export const Background = styled.div`
    flex: 1;
    background: url(${signInBackgroundImg}) no-repeat center;
    background-size:cover;
`;

export const LabelError = styled.label`
  font-size: 14px;
  color: red;
`;
