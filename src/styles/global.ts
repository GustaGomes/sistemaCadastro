import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: 'Roboto Slab', serif;
    }

    body {
        /* background: #312E38; */
        background: ${props => props.theme["gray-100"]};
        color: #FFF;
        -webkit-font-smoothing: antialiased;

    }

    border-style, input, button {
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
    }

    h1, h2, h3, h4, h5, h6, strong, p {
        font-weight: 500;
    }

    button{
        cursor: pointer;
    }
`;
