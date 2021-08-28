import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        //color
        --body-bg: linear-gradient(to bottom right, rgb(0, 0, 70), rgb(28, 181, 224));
        --header-bg: rgba(209, 209, 249, 0.15);
        --main-bg: #3076af;
        --footer-bg: #031330;



        --light: rgba(210, 200, 220, 1);
        --light2: rgba(220, 220, 220, 0.7);
        --dark: #070236;

        //Size
        --header-height: 5rem;
        --footer-height: 2rem;
        --shadow: 0px 6px 12px #0000001F;
	    --shadowStrong: 0px 12px 24px #0000003D;
	    --shadowWeak: 0px 2px 4px #0000001F;
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html {
        font-size: 16px;
        font-family: 'Assistant', sans-serif;

        @media only screen and (min-width: 320px) {
            font-size: calc(16px + 4 * ((100vw - 320px) / 1080));
            /* calc([minimum font size] + ([maximum font size] - [minimum font size]) *
            ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width]))); */
        }

         @media only screen and (min-width: 1400px) {
            font-size: 20px;
        }
    }

    body {
        background: ${({ theme }) => theme.backgroundPrimary};
        color: ${({ theme }) => theme.textPrimary};
        overflow: hidden;
    }
`;

// export const GlassEffect = css`
// 	background: rgba(255, 255, 255, 0.25);
// 	box-shadow: 0 8px 32px 0 rgba(31, 38, 35, 0.37);
// 	backdrop-filter: blur(4px);
// 	-webkit-backdrop-filter: blur(4px);
// 	border-radius: 10px;
// `;

export const lightTheme = {
	name: "light",
	primaryColor: "#6236b6",
	backgroundPrimary: "#f0f0f5",
	backgroundSecondary: "#efefef",
	backgroundContrast: "#0000000A",
	text: "#555",
	textStrong: "#222",
	textWeak: "#aaa",
	success: "#008567",
	warning: "#d04f4e",
	shadow1: "0px 6px 12px #0000001F",
	shadowStrong1: "0px 12px 24px #0000003D",
	shadowWeak1: "0px 2px 4px #0000001F",
	shadow: "-0.5rem 0.1rem 1rem #0000001F",
	shadowStrong: "-0.7rem 0.2rem 1.1rem #0000003D",
	shadowWeak: "-0.2rem  0.1rem 0.4rem #0000001F",
};

export const darkTheme = {
	name: "dark",
	primaryColor: "#6863ce",
	backgroundPrimary: "#263040",
	backgroundSecondary: "#404B5C",
	backgroundContrast: "#FFFFFF14",
	textStrong: "#fafafa",
	text: "#C0CADC",
	textWeak: "#606b7d",
	success: "#17eba0",
	warning: "#fc5a5a",
	shadow: "-0.6rem 0.1rem 1rem #0000005C",
	shadowStrong: "-0.9rem 0.1rem 1.5rem #0000007A",
	shadowWeak: "-0.2rem  0.1rem 0.4rem #0000003D",
};
