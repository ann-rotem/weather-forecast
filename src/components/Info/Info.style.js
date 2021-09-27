import styled from "styled-components";
import { breakpoints } from "utils/constants/breakpoints";

export const Text = styled.p`
	color: ${({ theme }) => theme.text};
	font-weight: 300;
	font-size: 0.8rem;

	a {
		color: ${({ theme }) => theme.primaryColor};
	}
`;

export const Links = styled.div`
	display: flex;
	align-items: center;
	margin: auto 0;
	align-self: flex-end;

	@media only screen and (min-width: ${breakpoints.lg}px) {
		margin: 0.5rem auto;
	}
`;

export const Link = styled.a`
	display: inline-flex;
	align-items: center;
	color: ${({ theme }) => theme.textStrong};

	svg {
		filter: drop-shadow(${({ theme }) => theme.textShadow});
	}

	&:hover,
	&:focus-visible {
		fill: ${({ theme }) => theme.textStrong};
		outline: none;
	}
`;
