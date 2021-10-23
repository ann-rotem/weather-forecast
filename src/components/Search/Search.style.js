import styled from "styled-components/macro";

export const Form = styled.form`
	display: flex;
	height: 100%;
	align-items: center;
	background: ${({ theme }) => theme.colors.background.primary};
	//backdrop-filter: blur(1rem);
	border: 1px solid ${({ theme }) => theme.colors.border.primary};
	border-radius: 2rem;
	box-shadow: ${({ theme }) => theme.elevation.small};

	&:focus-within {
		outline: 1px solid ${({ theme }) => theme.colors.status.focus};
	}

	@media only screen and (min-width: ${({ theme }) =>
			theme.breakpoints.laptop}) {
		height: 2.5rem;
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
	padding: 0.5rem 0 0.5rem 1rem;
	color: ${({ theme }) => theme.colors.text.primary};
	border: none;
	border-radius: 2rem 0 0 2rem;
	background: transparent;

	&::placeholder {
		color: ${({ theme }) => theme.colors.text.weak};
		font-weight: 300;

		font-style: italic;
	}

	&:focus,
	&:focus-visible {
		outline: none;
	}

	@media only screen and (min-width: ${({ theme }) =>
			theme.breakpoints.laptop}) {
		padding: 0.2rem 0 0.2rem 1rem;
	}
`;

export const SearchButton = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	border: 1px solid transparent;
	border-radius: 0 2rem 2rem 0;
	padding: 0 0.7rem 0 0.2rem;
	height: 100%;
	background: transparent;
	color: ${({ theme }) => theme.icon.colors.primary};

	svg {
		transition: 250ms transform ease-in-out, 250ms filter ease-in-out;
		filter: drop-shadow(${({ theme }) => theme.icon.elevation.small});
	}

	&:hover,
	&:focus,
	&:focus-visible {
		svg {
			transform: scale(1.2);
			filter: drop-shadow(${({ theme }) => theme.icon.elevation.medium});
		}
	}

	&:focus,
	&:focus-visible {
		outline: none;
	}
`;
