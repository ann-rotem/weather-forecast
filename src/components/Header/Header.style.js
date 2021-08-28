import styled from "styled-components";
import { breakpoints } from "utils/constants/breakpoints";

export const Header = styled.header`
	display: flex;
	background: var(--header-bg);
	background: ${({ theme }) => theme.backgroundContrast};
	height: var(--header-height);
	padding: 1rem 2rem;
	align-items: center;
	justify-content: space-between;
	border-radius: 0;
	box-shadow: ${({ theme }) => theme.shadowWeak};
`;

export const Logo = styled.h1`
	display: flex;
	flex-wrap: wrap;
	font-size: 2rem;
	line-height: 1;
	color: ${({ theme }) => theme.primaryColor};
	width: ${(props) => (props.width <= breakpoints.sm ? "10rem" : "16rem")};
	font-weight: 800;
	text-shadow: ${({ theme }) => theme.shadowWeak};
	span {
		font-weight: 300;
		padding-right: 0.3rem;
	}
`;
