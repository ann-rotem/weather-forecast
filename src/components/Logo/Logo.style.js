import styled from "styled-components/macro";
import { breakpoints } from "utils/constants/breakpoints";

export const LogoWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-height: 100%;

	svg {
		height: 100%;
		max-height: 5rem;
	}
	@media only screen and (min-width: ${breakpoints.md}px) {
		width: 17rem;
	}

	@media only screen and (min-width: ${breakpoints.lg}px) {
		flex-direction: column;
		padding-bottom: 2rem;
		max-width: 100%;
		height: auto;
		row-gap: 1rem;
		justify-content: center;
	}
`;

export const LogoText = styled.div`
	padding-left: 0.5rem;
	width: auto;
	display: inline-flex;

	h1 {
		font-size: 1.5em;
		font-weight: 800;
		text-shadow: -2px 1px 0 rgba(20, 20, 20, 0.2);
		color: ${({ theme }) => theme.primary};
	}
	span {
		font-weight: 500;
	}

	@media only screen and (min-width: ${breakpoints.lg}px) {
		padding: 0.5rem 0;
		text-align: center;
	}
`;
