import styled from "styled-components/macro";
import { breakpoints } from "utils/constants/breakpoints";

export const Header = styled.header`
	grid-area: header;
	display: flex;
	background: ${({ theme }) => theme.backgroundContrast};
	padding: 0 1rem;
	box-shadow: ${({ theme }) => theme.shadow};
	backdrop-filter: blur(0.5rem);

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
