import styled from "styled-components/macro";
import { breakpoints } from "utils/constants/breakpoints";
import { GlassEffect } from "GlobalStyle";

export const Header = styled.header`
	${GlassEffect}
	grid-area: header;
	display: flex;
	padding: 0 1rem;

	@media only screen and (min-width: ${breakpoints.sm}px) {
		padding: 0.5rem 2rem;
	}

	@media only screen and (min-width: ${breakpoints.lg}px) {
		flex-direction: column;
		justify-content: space-between;
		padding: 0.5rem;
	}
`;
export const HeaderMain = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;

	@media only screen and (min-width: ${breakpoints.lg}px) {
		flex-direction: column;
	}
`;

export const HeaderBottom = styled.div`
	display: none;

	@media only screen and (min-width: ${breakpoints.lg}px) {
		display: flex;
		flex-direction: column-reverse;
		justify-content: center;
		align-items: center;
	}
`;
