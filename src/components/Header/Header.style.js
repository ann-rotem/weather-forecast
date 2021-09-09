import styled from "styled-components";
import { breakpoints } from "utils/constants/breakpoints";

export const Header = styled.header`
	grid-area: header;
	display: flex;
	background: ${({ theme }) => theme.backgroundSecondary};
	//height: var(--header-height);
	padding: 1rem 2rem;
	align-items: center;
	justify-content: space-between;
	border-radius: 0;
	box-shadow: ${({ theme }) => theme.shadow};

	@media only screen and (min-width: ${breakpoints.lg}px) {
		flex-direction: column;
		justify-content: flex-start;

		h1 {
			padding-bottom: 2rem;
		}
	}
`;

export const Logo = styled.h1`
	display: flex;
	flex-wrap: wrap;
	font-size: 2rem;
	line-height: 1;
	color: ${({ theme }) => theme.primaryColor};
	//width: ${(props) => (props.width <= breakpoints.sm ? "10rem" : "16rem")};
	font-weight: 800;
	text-shadow: ${({ theme }) => theme.textShadow};
	span {
		font-weight: 300;
		padding-right: 0.3rem;
	}
`;
