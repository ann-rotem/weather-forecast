import styled from "styled-components/macro";
import { breakpoints } from "utils/constants/breakpoints";

export const SearchSection = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	max-width: 22rem;
	margin: 1.5rem 0;

	@media only screen and (min-width: ${breakpoints.lg}px) {
		height: 5rem;
		padding: 1rem 0;
		margin: 0;
	}
`;

export const Form = styled.form`
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: ${({ theme }) => theme.shadow};
	background: ${({ theme }) => theme.backgroundPrimary};
	backdrop-filter: blur(0.5rem);
	border-radius: 1.5rem;
	height: 100%;
	border: 1px solid ${({ theme }) => theme.backgroundPrimary};

	&:focus-within {
		border: 1px solid ${({ theme }) => theme.primaryColor};
	}
`;

export const Label = styled.label`
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
	width: 1px;
`;

export const Input = styled.input`
	display: inline-flex;
	font-size: 1rem;
	color: ${({ theme }) => theme.text};
	background: transparent;
	border: none;
	border-radius: 1.5rem 0 0 1.5rem;
	padding: 1rem;
	height: 100%;

	&::placeholder {
		color: ${({ theme }) => theme.textWeak};
		font-family: "Assistant", sans-serif;
		font-weight: 300;
	}

	&:focus,
	&:focus-within,
	&:focus-visible {
		outline: none;
	}
`;

const Button = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	background: ${({ theme }) => theme.backgroundPrimary};
	fill: ${({ theme }) => theme.text};
	transition: all 250ms ease-in-out;
	border: none;

	&:hover,
	&:focus {
		background: ${({ theme }) => theme.text};
		fill: ${({ theme }) => theme.backgroundPrimary};
		outline: none;
	}
`;

export const SearchButton = styled(Button)`
	border-radius: 0 1.5rem 1.5rem 0;
	padding: 0 0.7rem 0 0.3rem;
	height: 100%;
`;

export const CurrentLocation = styled(Button)`
	border-radius: 50%;
	padding: 0.5rem;
`;
