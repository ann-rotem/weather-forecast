import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --vertical-padding: 2vh;
        --horizontal-padding: 4vw;
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
    }

    #root {
        display: grid;
        grid-template-rows: 3.5rem 1fr 3.5rem;
        grid-template-columns: 100vw;
        height: 100vh;
        width: 100%;
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

export const GlassEffect = css`
	background: ${({ theme }) => theme.colors.background.contrast};
	backdrop-filter: blur(0.3rem);
	box-shadow: ${({ theme }) => theme.elevation.medium};
`;
