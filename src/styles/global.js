import { createGlobalStyle  } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Lato', sans-serif;
        color: #E6E6E6;
        font-size: 1.6rem;
        text-decoration: none;
        --webkit-font-smoothing: antialiased;
    }

    html {
        font-size: 62.5%;
    }

    button {
        background-color: transparent;
        cursor: pointer;
    }

    img {
        max-width: 100%;
        display: block;
    }

    body {
        background-color: #161616;
    }
`

export default GlobalStyle