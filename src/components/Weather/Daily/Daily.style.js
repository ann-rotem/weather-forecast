import styled from "styled-components/macro";
import { WeatherCard, ContentWrapper } from "../Weather.style";

export const Daily = styled(WeatherCard)`
	grid-area: daily;
	display: block;
	background: transparent;
	box-shadow: none;
	padding: 0;

	@media only screen and (min-width: ${({ theme }) =>
			theme.breakpoints.laptop}) {
		//min-height: 100%;
		//align-self: stretch;
	}
`;

export const Wrapper = styled(WeatherCard)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 0.5em 0;
	height: 40rem;
`;

export const Day = styled(ContentWrapper)`
	display: grid;
	grid-template-rows: auto 1fr;
	overflow: hidden;
	transition: all 300ms ease-out;
	height: auto;
	max-height: ${({ active }) => (active ? "100%" : "3em")};
	flex: ${({ active }) => (active ? 3 : 1)};
	background: ${(props) =>
		props.index % 2 === 0 && props.theme.colors.background.contrast};
	transition: all 300ms ease-in-out;
`;

export const Container = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: ${(props) =>
		props.justify ? props.justify : "space-between"};
	padding: ${(props) =>
		props.padding ? `${props.padding}rem` : "0.1rem 1rem"};
`;

export const Box = styled.div`
	display: inline-flex;
	display: ${(props) => (props.row ? "flex" : "inline-flex")};
	flex-direction: ${(props) => (props.row ? "row" : "column")};
	align-items: center;
	justify-content: center;
	height: 100%;
	gap: ${(props) => props.gap && props.gap}em;
`;

export const Chevron = styled.i`
	display: block;
	position: relative;
	width: 22px;
	height: 22px;
	border: 2px solid transparent;
	border-radius: 100px;
	cursor: pointer;

	&::after {
		content: "";
		display: block;
		position: absolute;
		width: 0.5rem;
		height: 0.5rem;
		border-bottom: 2px solid;
		border-right: 2px solid;
		transform: ${({ active }) =>
			active ? "rotate(225deg)" : "rotate(45deg)"};
		left: 4px;
		top: 2px;
	}
`;

export const Expanded = styled(Container)`
	display: ${(props) => (props.active ? "flex" : "none")};
	flex-direction: column;
	border-top: 1px solid ${({ theme }) => theme.colors.background.contrast};
	width: 100%;
	transition: all 300ms ease-in-out;
	padding-bottom: 0.5rem;
`;

export const DailyDetails = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: repeat(3, auto);
	gap: 0.5em 1em;
	margin: auto 0;
	width: 100%;
	font-size: 0.9rem;
`;
