import styled from "styled-components/macro";
import { breakpoints } from "utils/constants/breakpoints";

export const Forecast = styled.div`
	display: flex;
	flex-direction: column;
	max-height: calc(100% - 4.5rem);
	border-radius: 0 0 1.5rem 1.5rem;
	background-color: ${({ theme }) => theme.backgroundContrast};
	overflow: hidden;
`;

export const Days = styled.div`
	display: grid;
	grid-template-rows: repeat(8, 3rem);
	overflow-y: auto;
	margin: 0 0.2rem 0.5rem 0;

	/* @media only screen and (min-width: ${breakpoints.lg}px) {
		grid-template-columns: repeat(8, auto);
		grid-template-rows: 1fr;
		margin: 0;
	} */
`;

export const Day = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-around;
	align-items: center;
	background: ${(props) => !props.isOdd && props.theme.backgroundContrast};
	color: ${(props) =>
		props.isOdd ? props.theme.textStrong : props.theme.text};
	padding: 0.3rem 1.5rem;

	p {
		min-width: 30%;
	}

	/* @media only screen and (min-width: ${breakpoints.lg}px) {
		flex-direction: column;
		overflow-x: auto;
		padding: 0;
		align-items: space-between;
		justify-content: space-around;
		height: 10rem;
	} */
`;
