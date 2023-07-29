import { createGlobalStyle  } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --blue: #11B0C8;
        --green: #BFDE42;
        --font-color-dark: #e6e6e6;
        --bg-color-dark: #161616;
        --font-color-light: #161616;
        --bg-color-light: #e6e6e6;
    }
    * {
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Lato', sans-serif;
        color: var(--font-color-dark);
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
        background-color: var(--bg-color-dark);
        scroll-behavior: smooth;
    }
`

export default GlobalStyle