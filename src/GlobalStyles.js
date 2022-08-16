import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --padding: 215px 30px;
        --page-padding: 98px 20px;

        --bg-color : #00C0C0;
        --white : #fff;
        --dark-text-color: #343a40;
        
        --font-family: 'Inter', sans-serif;
    }
    body {
        font-family: var(--font-family);
    }
    *, ::after, ::before {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
`;
