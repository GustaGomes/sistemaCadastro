import styled from "styled-components";
import { shade } from 'polished';

export const ButtonComponent = styled.button`
    /* background: #ff9000;  
    color: #312e38; */
    /* background-color: #007bff;
    color: #fff;     */
    background-color: #027368;
    color: #fff; 
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    width: 100%;
    font-weight: 500;
    margin-top: 16px;
    transition: background-color 0.2s;
    &:hover {
        /* background: ${shade(0.2, '#007bff')}; */
        background: ${shade(0.2, '#027368')};
    }
`;
