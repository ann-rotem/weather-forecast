import styled from "styled-components";
import { breakpoints } from "utils/constants/breakpoints";

export const SearchSection = styled.section`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	justify-content: center;
	max-width: 20rem;
	margin-bottom: 1rem;

	@media only screen and (min-width: ${breakpoints.lg}px) {
		height: 10%;
		margin-bottom: 2rem;
	}
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0 1rem;

	@media only screen and (min-width: ${breakpoints.lg}px) {
		line-height: 2;
		label {
			padding: 0.5rem;
		}
	}
`;

export const Label = styled.label`
	display: flex;
	color: ${({ theme }) => theme.textWeak};
	font-weight: 300;
`;

export const SearchBar = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: ${({ theme }) => theme.shadow};
	background: ${({ theme }) => theme.backgroundSecondary};
	border-radius: 1.5rem;
	height: 2rem;
`;

export const Input = styled.input`
	display: inline-flex;
	font-size: 1rem;
	color: ${({ theme }) => theme.text};
	background: transparent;
	border: none;
	border-radius: 1.5rem 0 0 1.5rem;
	padding: 0.5rem;
	width: 70%;
	height: 100%;

	:focus:not(:focus-visible) {
		outline: none;
	}

	&:focus {
		outline: 1px solid ${({ theme }) => theme.primaryColor};
	}
`;
