import styled, { css, keyframes } from "styled-components/macro";

export const WeatherSection = styled.section`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(4, auto);
	grid-template-areas:
		"info"
		"current"
		"hourly"
		"daily";
	justify-items: center;
	align-items: start;
	width: 100%;
	max-width: 100vw;
	//max-height: 100%;
	gap: 1rem 0;

	@media only screen and (min-width: ${({ theme }) =>
			theme.breakpoints.laptop}) {
		grid-template-columns: 1fr 2fr;
		grid-template-rows: 3rem auto 1fr;
		grid-template-areas:
			"info info"
			"daily current "
			"daily hourly";
		gap: 1rem 0.5rem;
		padding: 0 ${({ theme }) => theme.spacing.medium};
		height: auto;
		max-width: 70rem;
		//overflow-y: auto;
	} ;
`;

const fadeIn = keyframes`
	0% { transform: scale(0.5); opacity: 0 }
	100% { transform: scale(1); opacity: 1 }
`;

export const WeatherCard = styled.article`
	background: ${({ theme }) => theme.colors.background.primary};
	padding: ${({ theme }) => theme.spacing.medium};
	border-radius: 1rem;
	box-shadow: ${({ theme }) => theme.elevation.small};
	animation: ${fadeIn} 500ms ease-in;
	max-width: 22rem;
	width: 92vw;
	justify-self: center;

	@media only screen and (min-width: ${({ theme }) =>
			theme.breakpoints.tablet}) {
		max-width: 22rem;
		margin: 1rem 0;
		padding: ${({ theme }) => theme.spacing.small};
	}

	@media only screen and (min-width: ${({ theme }) =>
			theme.breakpoints.laptop}) {
		margin: 0;
		width: 100%;
	}

	@media only screen and (min-width: ${({ theme }) =>
			theme.breakpoints.desktop}) {
		padding: ${({ theme }) => theme.spacing.medium};
	}
`;

export const ContentWrapper = styled.div`
	border-radius: 0.75rem;
	background: ${({ theme }) => theme.colors.background.secondary};
	box-shadow: ${({ theme }) => theme.elevation.small};
	width: 100%;
	${(props) =>
		props.gridArea &&
		css`
			grid-area: ${props.gridArea};
		`}
`;

export const Container = styled.div`
	display: flex;
	width: 100%;

	align-items: center;
	justify-content: ${(props) =>
		props.justify ? props.justify : "space-between"};
	padding: ${(props) =>
		props.padding ? `${props.padding}rem` : "0.1rem 1rem"};
	gap: ${(props) => props.gap && `${props.gap}rem`};
`;

export const Title = styled.h2`
	color: ${({ theme }) => theme.colors.text.strong};
	font-size: ${(props) => (props.size ? `${props.size}rem` : "1.5rem")};
	margin-bottom: ${({ theme }) => theme.spacing.medium};
	${(props) =>
		props.gridArea &&
		css`
			grid-area: props.gridArea;
		`}

	@media only screen and (min-width: ${({ theme }) =>
		theme.breakpoints.laptop}) {
		margin-bottom: ${({ theme }) => theme.spacing.small};
	}
`;

export const Text = styled.p`
	font-size: ${(props) => props.size || "1"}em;
	color: ${(props) =>
		props.color === "strong"
			? props.theme.colors.text.strong
			: props.color === "weak"
			? props.theme.colors.text.weak
			: props.theme.colors.text.primary};
	font-weight: ${(props) => props.weight || "normal"};
	text-align: ${(props) => (props.align ? props.align : "left")};
`;

export const IconWrapper = styled.span`
	display: flex;
	height: ${(props) => props.size && `${props.size}em`};
	width: auto;
	padding: ${(props) => (props.padding ? `${props.padding}em` : "0")};
	color: ${(props) =>
		props.color === "strong"
			? props.theme.colors.text.strong
			: props.color === "weak"
			? props.theme.colors.text.weak
			: props.theme.colors.text.primary};

	svg {
		display: inline-block;
		max-height: 100%;
		filter: drop-shadow(${({ theme }) => theme.icon.elevation.medium});
	}
`;

export const Info = styled.div`
	grid-area: info;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media only screen and (min-width: ${({ theme }) =>
			theme.breakpoints.laptop}) {
		flex-direction: row;
		align-items: end;
		gap: 1rem;
	}
`;

export const InfoBox = styled.div`
	display: flex;
	margin: ${({ theme }) => theme.spacing.small} 0;
	justify-content: center;
	align-items: flex-end;
	line-height: 1;
	height: 100%;
`;
