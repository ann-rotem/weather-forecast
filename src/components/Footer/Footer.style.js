import styled from "styled-components";
import { breakpoints } from "utils/constants/breakpoints";
import { GlassEffect } from "GlobalStyle";

export const Footer = styled.footer`
	${GlassEffect}
	grid-area: footer;
	display: flex;
	font-size: 0.9rem;
	width: 100%;
	padding: 0 1rem;
	align-items: center;
	justify-content: space-between;

	@media only screen and (min-width: ${breakpoints.lg}px) {
		display: none;
	}
`;
