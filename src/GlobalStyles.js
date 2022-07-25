import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --padding: 215px 30px;
    }
    body {
        font-family: 'Josefin sans', sans-serif;
    }
    *, ::after, ::before {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

`;
