import styled from "styled-components";

export const Footer = styled.footer`
	display: flex;

	height: var(--footer-height);
	max-width: 100%;
	padding: 0.5rem ${({ theme }) => theme.spacing.section.x};
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
	height: 1.5rem;
`;

export const Link = styled.a`
	display: inline-flex;
	align-items: center;
	height: 100%;
	color: ${({ theme }) => theme.colors.text.strong};

	svg {
		filter: drop-shadow(${({ theme }) => theme.icon.elevation.small});
		height: 100%;
	}

	&:hover,
	&:focus-visible {
		fill: ${({ theme }) => theme.colors.text.primary};
		outline: none;
	}
`;
