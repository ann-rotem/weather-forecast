import { createGlobalStyle } from "styled-components";
import { breakpoints } from "utils/constants/breakpoints";
import dayBackground from "assets/images/day.jpg";
import nightBackground from "assets/images/night.jpg";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html {
        font-size: 16px;
        font-family: 'Assistant', sans-serif;
        background-image: ${({ theme }) => theme.backgroundImage};
        background-size: cover;
        background-attachment: fixed;

        @media only screen and (min-width: ${breakpoints.xs}px) {
            font-size: calc(16px + 4 * ((100vw - ${breakpoints.xs}px) / 1080));
            /* calc([minimum font size] + ([maximum font size] - [minimum font size]) *
            ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width]))); */
        }

         @media only screen and (min-width: ${breakpoints.xxl}px) {
            font-size: 20px;
        }
    }

    body {
        color: ${({ theme }) => theme.textPrimary};
        height: 100vh;
        width: 100vw;
        overflow-x: hidden;
    }

    #root {
        min-height: 100%;
        width: 100%;
        display: grid;
        grid-template-rows: 5rem auto 3rem;
        grid-template-areas:
            "header"
            "main"
            "footer"
        ;

        @media only screen and (min-width: ${breakpoints.lg}px) {
            grid-template-rows: 100%;
            grid-template-columns: 20vw auto;
            grid-template-areas:
                "header main"
            ;   
	    }
    }

    main {
        grid-area: main;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-x: hidden;
        padding: 0 1rem;
       

        @media only screen and (min-width: ${breakpoints.lg}px) {
            justify-content: flex-start;
            margin: 0;
	    }

       
    }

    ::-webkit-scrollbar {
		width: 0.5rem;
	}
    ::-webkit-scrollbar-track {
        background: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.textWeak};
        border-radius: 1.5rem;
        //background-clip: content-box;
        width: 0.5rem;
        
    }
    ::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) => theme.text};
    }
`;

export const lightTheme = {
	name: "light",
	backgroundImage: `url(${dayBackground})`,
	primaryColor: "#3671b6",
	backgroundPrimary: "#d2e4e3",
	backgroundSecondary: "#c0dad8",
	backgroundContrast: "rgba(200, 228, 228, 0.4)",
	text: "#333",
	textStrong: "#222",
	textWeak: "#555",
	success: "#008567",
	warning: "#d04f4e",
	shadow: "-0.5rem 0.2rem 1rem #00000024",
	shadowStrong: "-0.7rem 0.2rem 1.1rem #0000003D",
	shadowWeak: "-0.1rem  0.1rem 0.2rem #0000001F",
	textShadow: "-0.1rem -0.1rem 0.1rem rgba(100, 100, 100, 0.3)",
};

export const darkTheme = {
	name: "dark",
	backgroundImage: `url(${nightBackground})`,
	primaryColor: "#f8be71",
	backgroundPrimary: "#2f3235",
	backgroundSecondary: "#3c3e3f",
	backgroundContrast: "rgba(23, 23, 23, 0.25)",
	textStrong: "#f7f7f2",
	text: "#e6e5d5",
	textWeak: "#dfdfdf",
	success: "#17eba0",
	warning: "#fc5a5a",
	icon: "#ffffffDD",
	shadow: "-0.6rem 0.1rem 1rem #0000005C",
	shadowStrong: "-0.9rem 0.1rem 1.5rem #0000007A",
	shadowWeak: "-0.1rem  0.1rem 0.2rem #0000003D",
	textShadow: "-0.1rem -0.1rem 0.1rem rgba(0, 0, 0, 0.4)",
};
