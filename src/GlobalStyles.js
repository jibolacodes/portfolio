import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --padding: 215px 30px;
        --page-padding: 98px 20px 0px 20px;
        
        --bg-color : #00C0C0;
        --bg-color: #358B78;
        
        --white : #fff;
        --dark-text-color: #343a40;
        --grey-text-color: #6c757d;
        --text-border-color: #dee2e6;
        
        --font-family: 'Poppins', sans-serif;
        --font-family: 'Quicksand', sans-serif;
        --font-logo: 'Share Tech Mono', monospace;
        --font-size: 16px;

        --font-weight-bold: 600;
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
        font-size: var(--font-size);
    }
    button, p, span, li, input, textarea {
        font-weight: 500;
    }
`;

// --bg-color: #F6E4CE;
// --bg-color: #15171D;
// --bg-color: #5CCA79;
// --bg-color : #A86000;
// --bg-color : #314214;
// --bg-color : #5CCA79;
// --bg-color: #358B78;