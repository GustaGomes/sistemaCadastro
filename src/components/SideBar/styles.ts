import styled from 'styled-components';

interface ContainerProps {
  sidebar: boolean;
}

export const Container = styled.div<ContainerProps>`
  /* background: ${props => props.theme["gray-600"]}; */
  background: #5c7373;
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 300px;
  bottom: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .4s;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 100px;
`;