import styled, { css } from "styled-components/macro";
import { breakpoints } from "utils/constants/breakpoints";

export const Tabs = styled.section`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	width: 100%;
	max-width: 25rem;
	height: auto;
	border-radius: 0 0 1.5rem 1.5rem;
	margin-bottom: 1rem;

	@media only screen and (min-width: ${breakpoints.lg}px) {
		margin: 1rem auto;
	}
`;

export const ButtonGroup = styled.div`
	display: inline-flex;
	margin: 0 auto;
`;

export const TabButton = styled.button`
	display: inline-flex;
	align-items: center;
	padding: 0.3rem 1rem;
	margin: 0 0.5rem;
	font-size: 0.8rem;
	font-weight: 300;
	cursor: pointer;
	color: ${({ theme }) => theme.text};
	background: ${({ theme }) => theme.backgroundSecondary};
	border-radius: 40% 40% 0 0;
	border: none;
	text-transform: capitalize;
	box-shadow: -0.1rem 0rem 0.2rem rgba(40, 40, 40, 0.5);
	${(props) =>
		props.active &&
		css`
			color: ${({ theme }) => theme.textStrong};
			background: ${({ theme }) => theme.backgroundPrimary};
			box-shadow: -0.2rem 0rem 0.3rem rgba(50, 50, 50, 0.4);
			cursor: default;
		`}

	&:hover {
		color: ${(props) => props.theme.textStrong};
		opacity: ${(props) => (props.active ? "1" : "0.7")};
	}

	@media only screen and (min-width: ${breakpoints.sm}px) {
		padding: 0.5rem 1rem 0.3rem 1rem;
		font-size: 1rem;
	}
`;

export const TabContent = styled.article`
	display: flex;
	flex-direction: column;
	height: auto;
	background-origin: border-box;
	border-radius: 1.5rem;
	box-shadow: ${({ theme }) => theme.shadow};
`;

export const CurrentDetails = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.backgroundPrimary};
	border-radius: 1.5rem 1.5rem 0 0;
	width: 100%;
	height: 4rem;
	padding: 0.2rem 0;
	color: ${({ theme }) => theme.text};
	fill: ${({ theme }) => theme.text};
	border-bottom: 0.1rem solid ${({ theme }) => theme.backgroundSecondary};
	z-index: 10;

	@media only screen and (min-width: ${breakpoints.sm}px) {
		padding: 0.5rem 0;
	}
`;

export const CurrentDateTime = styled.p`
	display: inline-flex;
	font-weight: 300;
	padding: 0.3rem 0;
`;

export const LocationWrapper = styled.span`
	display: flex;
	align-items: center;
	p {
		font-size: 1.2rem;
		padding-left: 0.5rem;
	}
`;

export const WeatherWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	border-radius: 0 0 1.5rem 1.5rem;
	background-color: ${({ theme }) => theme.backgroundContrast};
	backdrop-filter: blur(0.5rem);
	color: ${({ theme }) => theme.text};
	height: auto;
`;
