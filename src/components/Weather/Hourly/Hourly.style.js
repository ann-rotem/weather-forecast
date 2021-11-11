import styled, { keyframes } from "styled-components/macro";
import { WeatherCard, ContentWrapper } from "../Weather.style";

export const Hourly = styled(WeatherCard)`
	grid-area: hourly;
	display: block;
	width: 30rem;
	max-width: 92vw;

	@media only screen and (min-width: ${({ theme }) =>
			theme.breakpoints.laptop}) {
		width: 100%;
		max-width: 36rem;
		align-self: end;
	}
`;

export const Wrapper = styled(ContentWrapper)`
	height: 100%;
	width: 100%;
	padding: 0.5em;
`;

export const Legend = styled.div`
	display: grid;
	grid-template-columns: repeat(2, auto);
	//grid-template-rows: repeat(auto-fill, minmax(2em, 1fr));
	grid-auto-flow: row;
	grid-auto-rows: auto;
	justify-items: start;
	margin: 0 auto;
	gap: 0.5em 1em;
	width: 100%;
	max-width: 22em;
	padding: 0.5em;
`;

export const LegendItem = styled.div`
	display: flex;
	gap: 0.5em;
	align-items: center;
	cursor: pointer;
	justify-content: space-between;
	width: 100%;
`;

const checkStart = keyframes`
	0% {height: 0;}
	100% {height: 50%;}
`;

const checkEnd = keyframes`
	0% {height: 0;}
	50% {height: 0;}
	100% {height: 80%;}
`;

export const Checkbox = styled.input`
	-webkit-appearance: none;
	appearance: none;
	display: inline-block;
	position: relative;
	width: 20px;
	height: 20px;
	background: transparent;
	background: ${({ theme }) => theme.colors.background.primary};
	border: 1px solid ${({ theme }) => theme.colors.border.primary};
	border-radius: 15%;
	color: ${({ theme }) => theme.colors.text.strong};
	cursor: pointer;

	&::before,
	&::after {
		content: "";
		display: inline-block;
		position: absolute;
		height: 0;
		width: 2px;
		border-radius: 2px;
		background: ${({ theme }) => theme.colors.text.strong};
		transform-origin: left top;
	}

	&::before {
		top: 51%;
		left: 12%;
		transform: rotate(-45deg);
	}

	&::after {
		top: 85%;
		left: 50%;
		transform: rotate(-145deg);
	}

	&:checked&::before {
		height: 50%;
		animation: ${checkStart} 200ms ease forwards;
	}

	&:checked&::after {
		height: 80%;
		animation: ${checkEnd} 400ms ease forwards;
	}
`;

export const LabelStyle = styled.span`
	display: inline-flex;
	width: 1em;
	margin-left: 6px;
	border-bottom: 1px solid green;
	border-bottom-width: ${(props) => (props.dataset === "y" ? "3" : "1")}px;
	border-bottom-style: ${(props) => (props.dashed ? "dashed" : "solid")};
	border-bottom-color: ${(props) =>
		props.dataset === "y"
			? props.theme.colors.chart.datasetY
			: props.theme.colors.chart.datasetY1};
`;

export const LabelText = styled.label`
	display: inline-flex;
	flex-grow: 1;
	cursor: pointer;
`;

export const Chart = styled.div`
	position: relative;
	width: 100%;
	font-size: 14px;
	line-height: 1;
	margin: 0 auto;
	max-width: 34rem;
	height: 15rem;

	@media only screen and (min-width: ${({ theme }) =>
			theme.breakpoints.laptop}) {
		height: 12rem;
	}
`;
