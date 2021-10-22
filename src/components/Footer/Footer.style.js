import styled from "styled-components";

export const Footer = styled.footer`
	display: flex;
	flex-shrink: 0;
	height: 3.5rem;
	max-width: 100%;
	padding: var(--vertical-padding) var(--horizontal-padding);
	align-items: center;
	justify-content: space-between;
`;

export const Text = styled.p`
	color: ${({ theme }) => theme.colors.text.strong};
	font-weight: 300;
	text-shadow: ${({ theme }) => theme.elevation.medium};
`;

export const Links = styled.div`
	display: flex;
	align-items: center;
	margin: auto 0;
	align-self: flex-end;
`;

export const Link = styled.a`
	display: inline-flex;
	align-items: center;
	color: ${({ theme }) => theme.colors.text.strong};

	svg {
		filter: drop-shadow(${({ theme }) => theme.icon.elevation.small});
	}

	&:hover,
	&:focus-visible {
		fill: ${({ theme }) => theme.colors.text.primary};
		outline: none;
	}
`;
