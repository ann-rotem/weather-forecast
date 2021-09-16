import styled from "styled-components/macro";

export const WeatherContainer = styled.div`
	height: 100%;
	width: 100%;
`;

export const Paragraph = styled.p`
	font-size: ${(props) => (props.size ? props.size : "1em")};
	color: ${({ theme }) => theme.text};
`;

export const Temperature = styled.span`
	display: inline-flex;
	flex-direction: column;
	color: ${({ theme }) => theme.textStrong};
	text-shadow: ${(props) => props.shadow && props.theme.textShadow};

	h2 {
		font-size: 2em;
		font-weight: 800;
		line-height: 1;
	}

	p {
		font-size: 0.75em;
	}
`;

export const IconWrapper = styled.span`
	display: inline-flex;
	width: ${(props) => props.size && `${props.size}em`};
	height: 100%;
	padding: 0.1rem;

	svg {
		width: 100%;
		height: auto;
		filter: drop-shadow(-2px -2px 1px rgba(50, 50, 50, 0.3));
	}
`;

export const Cards = styled.div`
	display: grid;
	grid-template-rows: auto;
	grid-auto-columns: auto;
	grid-auto-flow: column;
	overflow: auto;
	margin: 0.5rem;
`;

export const Card = styled.div`
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
