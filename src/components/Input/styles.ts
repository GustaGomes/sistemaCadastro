import styled from "styled-components";

export const Input = styled.input`
  /* background: #232129; */
  background: #2f3130;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  color: #fff;

  & + input {
  margin-top: 8px;
  }
`;