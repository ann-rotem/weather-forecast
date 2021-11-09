import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --header-height: 3.5rem;
        --footer-height: 2.5rem;
        --main-height: calc(100vh - var(--header-height) - var(--footer-height));
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: 'Assistant',  Verdana, sans-serif;
    }

    html {
        font-size: 14px;
        background-image: ${({ theme }) => theme.bgImage};
        background-size: cover;
        background-attachment: fixed;
        height: 100vh;
        width: 100vw;
        

        @media only screen and (min-width: 320px) {
            font-size: calc(14px + 4 * ((100vw - 320px) / 1080));
            //calc([minimum font size] + ([maximum font size] - [minimum font size]) *
            //((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width])));
        }

         @media only screen and (min-width: 1440px) {
            font-size: 18px;
        }
    }

    body {
        color: ${({ theme }) => theme.colors.text.primary};
        line-height: 1.5;
        overflow-x: hidden;
        position: relative;
    }

    h1 {
        font-size: 2em;
        font-weight: 800;
    }

    a {
        color: ${({ theme }) => theme.colors.text.link};
    }

    ::-webkit-scrollbar {
        width: 0.5rem;
    }

    ::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.colors.background.primary};
        background-color: transparent;
        border-radius: 0.5rem;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.text.primary};
        border-radius: 0.5rem;
    }

`;
