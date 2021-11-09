import styled from "styled-components/macro";
import { WeatherCard, ContentWrapper, IconWrapper } from "../Weather.style";

export const CurrentWeather = styled(WeatherCard)`
	grid-area: current;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(3, auto);
	grid-template-areas:
		"title"
		"wrapper1"
		"wrapper2";

	@media only screen and (min-width: ${({ theme }) =>
			theme.breakpoints.laptop}) {
		//align-self: center;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: min-content 1fr;
		grid-template-areas:
			"title ."
			"wrapper1 wrapper2";
		gap: 0 1rem;
		max-width: 35rem;
	}
`;

export const Wrapper = styled(ContentWrapper)`
	grid-area: wrapper1;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: repeat(2, min-content);
	grid-template-areas:
		"temp icon"
		"description icon";
	width: 100%;
	padding: ${({ theme }) => theme.spacing.small};
	margin-bottom: ${({ theme }) => theme.spacing.medium};

	@media only screen and (min-width: ${({ theme }) =>
			theme.breakpoints.laptop}) {
		padding: ${({ theme }) => theme.spacing.medium};
		margin-bottom: 0;
		gap: 0 ${({ theme }) => theme.spacing.small};
	}
`;

// export const Date = styled(Text)`
// 	grid-area: date;
// 	text-align: center;
// 	padding-bottom: ${({ theme }) => theme.spacing.small};
// `;

export const Icon = styled(IconWrapper)`
	grid-area: icon;
	justify-self: center;

	svg {
		max-height: 25em;
		filter: drop-shadow(${({ theme }) => theme.icon.elevation.medium});
	}

	@media only screen and (min-width: ${({ theme }) =>
			theme.breakpoints.laptop}) {
		height: 7em;
	}
`;

export const CurrentTemp = styled.div`
	grid-area: temp;
	padding-left: 0.5em;
	line-height: 1;

	h2 {
		font-size: 4rem;
		color: ${({ theme }) => theme.colors.text.strong};
		font-weight: 800;
	}

	p {
		font-size: 1em;
		font-weight: light;
		text-transform: capitalize;
	}
`;

export const Description = styled.p`
	grid-area: description;
	align-self: end;
	padding-left: 0.5em;
	word-wrap: normal;

	text-transform: capitalize;
`;

export const Details = styled(ContentWrapper)`
	grid-area: wrapper2;
	display: flex;
	width: 100%;
	height: 100%;
	justify-content: space-between;

	> * {
		&:not(:first-child) {
			border-left: 1px solid ${({ theme }) => theme.colors.border.secondary};
		}
	}

	@media only screen and (min-width: ${({ theme }) =>
			theme.breakpoints.laptop}) {
		flex-direction: column;
		justify-content: space-around;
		padding: 0 ${({ theme }) => theme.spacing.small};

		> * {
			&:not(:first-child) {
				border-left: none;
				border-top: 1px solid ${({ theme }) => theme.colors.text.weak};
			}
		}
	}
`;

export const Detail = styled.div`
	display: flex;
	flex-direction: column;
	width: 25%;
	line-height: 1.2;
	height: 100%;
	align-items: center;
	justify-content: space-between;
	text-align: center;
	font-weight: ${({ theme }) => theme.font.weight.light};
	padding: ${({ theme }) => theme.spacing.small};

	@media only screen and (min-width: ${({ theme }) =>
			theme.breakpoints.laptop}) {
		flex-direction: row;
		width: 100%;
		height: 25%;
		padding: 0;
	}
`;

export const DetailIcon = styled.span`
	display: inline-flex;
	flex-direction: column;
	height: 100%;

	svg {
		height: 100%;
		max-height: 3rem;
		width: auto;
		padding: ${({ theme }) => theme.spacing.small};
	}

	@media only screen and (min-width: ${({ theme }) =>
			theme.breakpoints.laptop}) {
		flex-direction: row;
		align-items: center;
		svg {
			max-height: 2rem;
			padding: ${({ theme }) => theme.spacing.xSmall};
		}

		p {
			font-size: 0.9em;
			padding-left: 0.3em;
			margin: auto 0;
		}
	}
`;
