import styled, { css } from "styled-components";

export const Toggler = styled.button`
	display: inline-block;
	position: relative;
	width: 3rem;
	height: 1.5rem;
	/* border: 0.1rem solid ${({ theme }) => theme.primaryColor}; */
	border: none;
	background: transparent;
	border-radius: 0.75rem;
	cursor: pointer;
	background: ${({ theme }) =>
		theme.name === "dark"
			? "linear-gradient(#15082c, #27135c, #3d196d)"
			: "linear-gradient(to bottom right, #0b5466, #4ea8cc, #60cfee)"};
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
		theme.name === "dark" ? "#d9d8d0" : "#f3ca58"};
	box-shadow: ${({ theme }) =>
		theme.name === "dark"
			? "inset -3px 1px 3px #899098, 0 0 1px 0.08rem rgba(235, 233, 225, 0.1)"
			: "inset -3px 1px 3px #dda96f, 0 0 1px 0.1rem rgba(245, 213, 127, 0.4)"};
	transition: all 250ms ease-in;
	${({ theme }) => theme.name === "dark" && css``}
	&::before,
			&::after {
		content: "";
		position: absolute;

		background: #b9b8b0;
		background: ${({ theme }) =>
			theme.name === "dark" ? "#b9b8b0" : "transparent"};
		box-shadow: inset 1px -1px 0px #ababac;
		box-shadow: inset 1px -1px 0px ${({ theme }) => (theme.name === "dark" ? "#ababac" : "transparent")};
	}
	&:before {
		height: 0.35rem;
		width: 0.35rem;
		border-radius: 0.4rem;
		top: 3%;
		left: 15%;
	}

	&:after {
		height: 0.15rem;
		width: 0.15rem;
		top: 50%;
		left: 40%;
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
