import styled from "styled-components/macro";
//import { GlassEffect } from "GlobalStyle";
import { breakpoints } from "utils/constants/breakpoints";

export const HeroWrapper = styled.article`
	display: flex;
	flex-direction: column;
	text-align: center;
	max-width: 30rem;
	margin: 0 1rem;
	border-radius: 1rem;
`;

export const Heading = styled.h2`
	color: ${({ theme }) => theme.textStrong};
	font-size: 1.8em;
	margin-bottom: 1em;
	text-shadow: ${({ theme }) => theme.shadow};

	@media only screen and (min-width: ${breakpoints.md}px) {
		font-size: 2.2em;
	}
`;

export const Text = styled.p`
	font-family: "Assistant", sans-serif;
	font-size: 0.8em;
`;
