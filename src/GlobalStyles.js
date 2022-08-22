import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --padding: 215px 30px;
        --page-padding: 98px 20px 0px 20px;

        --bg-color : #00C0C0;
        --white : #fff;
        --dark-text-color: #343a40;
        --grey-text-color: #6c757d;
        
        --font-family: 'Inter', sans-serif;
        --font-size: 16px;
    }
    *, ::after, ::before {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    body {
        font-family: var(--font-family);
    }
    html {
        scroll-behavior: smooth;
    }
    main {
        position: relative;
    }
`;
