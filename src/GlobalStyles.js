import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
    :root {
        --padding: 215px 30px;
        --page-padding: 98px 20px 0px 20px;


        --bg-color : #00C0C0;
        --white : #fff;
        --dark-text-color: #343a40;
        --grey-text-color: #6c757d;
        --text-border-color: #dee2e6;
        
        --font-logo: 'Aboreto', cursive;
        --font-family: 'Poppins', sans-serif;
        --font-family-absolute: 'Poppins', sans-serif;
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
    }
`;
