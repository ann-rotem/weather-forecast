import styled from "styled-components";
import { breakpoints } from "utils/constants/breakpoints";
import { Temperature, IconWrapper } from "../Weather.style";

export const CurrentWeather = styled.div`
	display: grid;
	grid-template-columns: auto 1fr;
	grid-template-columns: auto fit-content(13rem);
	grid-template-rows: repeat(auto-fit, minmax(4rem, 1fr));
	gap: 0 1rem;
	grid-template-areas:
		"temp icon"
		"details icon";
	padding: 1rem;
`;

export const CurrentTemp = styled(Temperature)`
	grid-area: temp;
	font-size: 1.5em;
`;

export const Icon = styled(IconWrapper)`
	grid-area: icon;
	flex-direction: column;
	align-items: center;
	height: auto;

	svg {
		max-width: 100%;
	}

	@media only screen and (min-width: ${breakpoints.lg}px) {
		align-items: flex-end;
	}
`;

export const Details = styled.div`
	grid-area: details;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	font-size: 1em;
	font-weight: 300;
	line-height: 2;
`;
