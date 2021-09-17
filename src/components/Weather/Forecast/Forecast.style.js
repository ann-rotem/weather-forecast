import styled from "styled-components/macro";
import { WeatherContainer } from "../Weather.style";

export const Forecast = styled(WeatherContainer)`
	display: flex;
	flex-direction: column;
`;

export const Days = styled.div`
	display: grid;
	height: 100%;
	grid-template-rows: repeat(auto-fill, minmax(1fr, 6vh));
`;

export const Day = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	justify-content: space-between;
	align-items: center;
	background: ${(props) => !props.isOdd && props.theme.backgroundContrast};
	color: ${(props) =>
		props.isOdd ? props.theme.textStrong : props.theme.text};
	padding: 0.2rem 1rem;

	p {
		padding: 0.5rem 0;
	}
`;
