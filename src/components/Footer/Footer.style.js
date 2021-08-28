import styled from "styled-components";

export const Footer = styled.footer`
	background: ${({ theme }) => theme.backgroundSecondary};
	color: ${({ theme }) => theme.textSecondary};
	display: flex;
	font-size: 0.8rem;
	height: 2rem;
	padding: 1rem 2rem;
	align-items: center;
	justify-content: space-around;
`;
