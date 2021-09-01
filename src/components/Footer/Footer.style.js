import styled from "styled-components";

export const Footer = styled.footer`
	background: ${({ theme }) => theme.backgroundSecondary};
	color: ${({ theme }) => theme.textSecondary};
	display: flex;
	font-size: 0.9rem;
	height: var(--footer-height);
	width: 100%;
	padding: 0 2rem;
	align-items: center;
	justify-content: space-between;
	box-shadow: ${({ theme }) => theme.shadow};
`;

export const Text = styled.p`
	color: ${({ theme }) => theme.text};

	span {
		color: ${({ theme }) => theme.textStrong};
	}
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
	fill: ${({ theme }) => theme.text};

	svg {
		filter: drop-shadow(${({ theme }) => theme.iconShadow});
	}

	&:hover,
	&:focus-visible {
		fill: ${({ theme }) => theme.textStrong};
		outline: none;
	}
`;
