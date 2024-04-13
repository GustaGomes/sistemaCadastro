import styled from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 2rem;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
  @media (min-width: 769px) and (max-width: 1100px) {
    width: 100%;
    justify-content: center;
  }
`;


export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  color: black;
  padding: 8px;
  width: 500px;
  background-color: #fff;
  gap: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CardImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid black;
  padding: 0 1rem 0 0;
  width: 140px;
  span{
    font-size: 0.8rem;
    font-weight: 400;
  }
`;

export const CardMoreInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  span{
    font-size: 0.8rem;
    font-weight: 400;
  }
`;

export const CardDetail = styled.p`
  margin: 5px 0;
`;

export const MoreInfoButton = styled.button`
  padding: 10px 20px;
  /* border: none; */
  border-radius: 5px;
  background-color: transparent;
  color: #fff;
  color: #5c7373;
  cursor: pointer;
  margin-top: 10px;
  border: 1px solid #5c7373;
  width: 100%;

  &:hover {
    background-color: #5c7373;
    color: #FFF;
    border: 1px solid #fff;
  }
  `;

export const TestTitleStatus = styled.div`
    display: flex;
    width: 100%;
    background-color: #027368;
    color: #fff;
    border-radius: 4px;
    justify-content: center;
`;