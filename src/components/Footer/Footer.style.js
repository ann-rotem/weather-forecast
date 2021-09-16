import styled from "styled-components";
import { breakpoints } from "utils/constants/breakpoints";

export const Footer = styled.footer`
	grid-area: footer;
	background: ${({ theme }) => theme.backgroundContrast};
	backdrop-filter: blur(0.2rem);
	color: ${({ theme }) => theme.textSecondary};
	display: flex;
	font-size: 0.9rem;
	height: var(--footer-height);
	width: 100%;
	padding: 0 1rem;
	align-items: center;
	justify-content: space-between;
	box-shadow: ${({ theme }) => theme.shadow};

	@media only screen and (min-width: ${breakpoints.lg}px) {
		display: none;
	}
`;
