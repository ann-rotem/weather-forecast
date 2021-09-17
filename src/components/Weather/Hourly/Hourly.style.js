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

export const ActiveWrapper = styled(Column)`
	font-size: 1.5rem;
	padding: 1rem;
	position: relative;

	@media only screen and (min-width: ${breakpoints.lg}px) {
		padding: 1rem 2rem;
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
	@media only screen and (min-width: ${breakpoints.lg}px) {
		padding: 0 1rem;
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
	padding: 0.2rem 0.5rem;
	border-radius: 0.7rem;
	margin: 0.3rem;
	width: 5rem;
	font-size: 1rem;
	cursor: ${(props) => (props.active ? "default" : "pointer")};
	transition: all 250ms linear;

	svg {
		margin: 0.3rem 0;
		width: 60%;
		filter: drop-shadow(-2px -3px 1px rgba(50, 50, 50, 0.2));
	}

	&:hover {
		background: ${({ theme }) => theme.backgroundPrimary};
		opacity: ${(props) => (props.active ? "1" : "0.7")};
	}
`;

export const DateTime = styled(Column)`
	text-align: center;
`;

export const HourlyDate = styled.p`
	color: ${({ theme }) => theme.textWeak};
	font-size: 0.8em;
`;

export const HourlyTime = styled.p`
	font-size: 1em;
	color: ${({ theme }) => theme.textStrong};
`;
