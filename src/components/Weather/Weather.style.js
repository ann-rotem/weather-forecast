import styled, { css } from "styled-components/macro";

export const WeatherContainer = styled.div`
	height: 100%;
	width: 100%;
`;

export const Paragraph = styled.p`
	font-size: ${(props) => props.size && `${props.size}em`};
	font-weight: ${(props) => props.weight && props.weight};
	color: ${({ theme }) => theme.text};
	${(props) =>
		props.weak &&
		css`
			color: ${({ theme }) => theme.textWeak};
			font-size: 0.8em;
		`}
	${(props) =>
		props.strong &&
		css`
			color: ${({ theme }) => theme.textStrong};
		`}
`;

export const Temperature = styled.span`
	display: inline-flex;
	flex-direction: column;
	color: ${({ theme }) => theme.textStrong};
	text-shadow: ${(props) => props.shadow && props.theme.textShadow};
	align-items: ${(props) => props.align && props.align};
	margin-bottom: ${(props) => props.marginBottom && props.marginBottom};
	font-size: ${(props) => props.size && `${props.size}em`};
	font-weight: ${(props) => props.bold && "800"};

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
