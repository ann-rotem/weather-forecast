import styled, { css } from "styled-components";
import { breakpoints } from "utils/constants/breakpoints";

export const Toggler = styled.button`
	display: inline-block;
	position: relative;
	width: 3rem;
	height: 1.5rem;
	overflow: hidden;
	border: none;
	background: transparent;
	border-radius: 0.75rem;
	cursor: pointer;
	background: ${({ theme }) =>
		theme.name === "dark"
			? "linear-gradient(#15082c, #27135c, #3d196d)"
			: "linear-gradient(to bottom right, #0b5466, #4ea8cc, #60cfee)"};

	&:focus,
	&:focus-visible {
		border: none;
		outline: 1px solid ${({ theme }) => theme.primaryColor};
	}

	@media only screen and (min-width: ${breakpoints.lg}px) {
		margin: 0 auto;
	}
`;

export const Switch = styled.span`
	display: block;
	position: absolute;
	z-index: 1;
	overflow: hidden;
	top: 0.15rem;
	left: ${({ theme }) => (theme.name === "dark" ? "0.15rem" : "1.7rem")};
	width: 1.2rem;
	height: 1.2rem;
	border-radius: 0.75rem;
	background: ${({ theme }) =>
		theme.name === "dark" ? "#f5f0cf" : "#f3ca58"};
	box-shadow: ${({ theme }) =>
		theme.name === "dark"
			? "inset -3px 1px 3px #e7e18c, 0 0 1px 0.15rem rgba(196, 194, 200, 0.2)"
			: "inset -3px 1px 3px #dda96f, 0 0 1px 0.1rem rgba(245, 213, 127, 0.4)"};
	transition: all 250ms ease-in;
	${({ theme }) => theme.name === "dark" && css``}
	&::before,
			&::after {
		content: "";
		position: absolute;
		background: ${({ theme }) =>
			theme.name === "dark" ? "rgba(190, 190, 190, 0.3)" : "transparent"};
		box-shadow: inset 1px -1px 0px ${({ theme }) => (theme.name === "dark" ? "rgba(180, 180, 180, 0.2)" : "transparent")};
	}
	&:before {
		height: 0.35rem;
		width: 0.35rem;
		border-radius: 0.4rem;
		top: 10%;
		left: 15%;
	}

	&:after {
		height: 0.15rem;
		width: 0.15rem;
		top: 40%;
		left: 50%;
		border-radius: 50%;
	}
`;

export const Stars = styled.div`
	position: absolute;
	height: 0.1rem;
	width: 0.1rem;
	right: 1rem;
	top: 0.3rem;
	background: #dfdfdf;
	border-radius: 50%;
	opacity: 0.6;
	box-shadow: 0 0 0.2rem rgba(255, 255, 255, 0.9);

	&::before,
	&::after {
		content: "";
		position: absolute;
		background: #dfdfdf;
		border-radius: 50%;
		height: 0.1rem;
		width: 0.1rem;
		box-shadow: 0 0 0.2rem rgba(255, 255, 255, 1);
	}

	&::before {
		top: 0.3rem;
		right: -0.6rem;
		transform: scale(0.6);
	}

	&::after {
		top: 0.8rem;
		right: 0.3rem;
		transform: scale(0.8);
	}
`;
export const Clouds = styled.div`
	position: absolute;
	left: 0.5rem;
	bottom: 0.3rem;
	height: 0.3rem;
	width: 1rem;
	background: rgba(255, 255, 255, 0.5);
	box-shadow: inset 0.1rem 0.1rem 0.1rem #fff;
	border-radius: 60%;

	&::before {
		content: "";
		position: absolute;
		left: 0.5rem;
		bottom: 0.6rem;
		height: 0.2rem;
		width: 0.9rem;
		background: rgba(255, 255, 255, 0.5);
		box-shadow: inset 0.1rem 0.1rem 0.1rem #fff;
		border-radius: 40%;
	}
`;
