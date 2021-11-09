import styled from "styled-components/macro";

export const Wrapper = styled.div`
	display: flex;
	height: 100%;

	@media only screen and (min-width: ${({ theme }) =>
			theme.breakpoints.laptop}) {
		height: 2.5rem;
		width: 2.5rem;
	}
`;

export const CurrentLocation = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 17.5%;
	cursor: pointer;
	border: 1px solid ${({ theme }) => theme.colors.border.primary};
	border-radius: 50%;
	height: 100%;
	width: 100%;
	box-shadow: ${({ theme }) => theme.elevation.small};
	color: ${({ theme }) => theme.colors.text.primary};
	background: ${({ theme }) => theme.colors.background.primary};

	svg {
		transition: 250ms transform ease-in-out, 250ms filter ease-in-out;
		filter: drop-shadow(${({ theme }) => theme.icon.elevation.small});
		height: 100%;
		width: 100%;
	}

	&:hover {
		svg {
			transform: scale(1.2);
			filter: drop-shadow(${({ theme }) => theme.icon.elevation.medium});
		}
	}

	&:focus,
	&:focus-visible {
		outline: 1px solid ${({ theme }) => theme.colors.status.focus};
	}
`;
