import styled from "styled-components/macro";
import { breakpoints } from "utils/constants/breakpoints";

export const Column = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Row = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Hourly = styled(Column)`
	border-radius: 0 0 1.5rem 1.5rem;
	background-color: ${({ theme }) => theme.backgroundContrast};
	color: ${({ theme }) => theme.text};
	padding: 0 0.5rem;
`;

export const ActiveWrapper = styled(Column)`
	font-size: 1.5rem;
	padding: 1rem;
	position: relative;

	/* @media only screen and (min-width: ${breakpoints.lg}px) {
		width: 25rem;
		margin: 0 auto;
		padding: 0;
	} */
`;

export const Background = styled.div`
	display: inline-flex;
	position: absolute;
	top: 1rem;
	left: 33%;
	width: 33%;
	padding: 1rem;

	svg {
		max-height: 100%;
		filter: opacity(15%);
	}
`;

const ActiveColumn = styled(Column)`
	width: 45%;
`;
export const ActiveDateTime = styled(ActiveColumn)``;

export const ActiveTemp = styled(ActiveColumn)`
	align-items: flex-end;
	line-height: 1;
	margin-bottom: 1rem;
	h2 {
		font-size: 2em;
	}
	p {
		font-size: 0.75em;
	}
`;
export const ActiveDetails = styled(Row)`
	p {
		font-size: 1rem;
		font-weight: 300;
		color: ${({ theme }) => theme.textStrong};
		text-transform: capitalize;
	}
`;

export const HourCards = styled.div`
	display: grid;
	grid-template-rows: auto;
	grid-auto-columns: auto;
	grid-auto-flow: column;
	overflow: auto;
	margin: 0.5rem;
`;

export const HourCard = styled(Column)`
	justify-content: space-around;
	align-items: center;
	background: ${(props) =>
		props.active
			? props.theme.backgroundPrimary
			: props.theme.backgroundContrast};
	padding: 0.5rem 1rem;
	border-radius: 0.5rem;
	margin: 0.5rem;
	font-size: 1rem;
	cursor: ${(props) => (props.active ? "default" : "pointer")};
	transition: all 250ms linear;

	&:hover {
		background: ${({ theme }) => theme.backgroundPrimary};
		opacity: ${(props) => (props.active ? "1" : "0.5")};
	}
`;

export const DateTime = styled(Column)`
	text-align: center;
`;

export const HourlyDate = styled.p`
	color: ${({ theme }) => theme.textWeak};
	font-size: 0.9em;
`;

export const HourlyTime = styled.p`
	font-size: 1.1em;
	color: ${({ theme }) => theme.textStrong};
`;

export const Temperature = styled.p`
	font-size: 2em;
	margin: 0.5rem 0;
	font-weight: 800;
	color: ${({ theme }) => theme.textStrong};
`;
