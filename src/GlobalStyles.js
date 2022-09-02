import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --padding: 215px 30px;
        --page-padding: 98px 20px 0px 20px;

        --main-color: #F6E4CE;
        --main-color: #5CCA79;
        --main-color: #15171D;
        

        --bg-color : #00C0C0;
        --bg-color : #09416C;
        --bg-color : #5CCA79;
        --bg-color : #314214;
        --bg-color : #749E52;
        --bg-color : #A86000;
        
        
        --white : #fff;
        --dark-text-color: #343a40;
        --grey-text-color: #6c757d;
        --text-border-color: #dee2e6;
        
        --font-logo: 'Aboreto', cursive;
        --font-family: 'Poppins', sans-serif;
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
`;
