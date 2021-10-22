import styled from "styled-components/macro";

export const HeroWrapper = styled.article`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto 1fr auto;
	grid-template-areas:
		"heading"
		"image"
		"text";
	gap: 1rem;
	align-items: center;
	width: 100%;
	max-width: 20rem;
	margin: 1rem;
	padding: 1rem;
	border-radius: 1rem;
	background: ${({ theme }) => theme.colors.background.primary};
	box-shadow: ${({ theme }) => theme.elevation.small};

	@media only screen and (min-width: ${({ theme }) =>
			theme.breakpoints.tablet}) {
		padding: 1rem 2rem;
		margin: auto 1rem;
		grid-template-columns: 1fr 15rem;
		grid-template-rows: auto 1fr;
		grid-template-areas:
			"heading heading"
			"text image"
			"text image";
		gap: 0;
		max-width: 30rem;
	} ;
`;

export const Heading = styled.h2`
	grid-area: heading;
	color: ${({ theme }) => theme.colors.text.strong};
	font-size: 1.8rem;
	margin-bottom: 0.5em;
	text-align: center;
	line-height: 1.3;
`;

export const ImageWrapper = styled.div`
	grid-area: image;
	display: flex;
	justify-self: center;
	width: 100%;
	max-width: 20rem;
	padding: 0 1rem;
	svg {
		width: 100%;
	}
`;

export const TextWrapper = styled.div`
	grid-area: text;
	display: flex;
	height: 100%;
	align-items: end;
`;

export const Text = styled.p`
	font-size: 0.8em;
	letter-spacing: 1px;
	text-align: center;

	em {
		color: ${({ theme }) => theme.colors.text.strong};
		padding: 0 0.2em;
	}

	@media only screen and (min-width: ${({ theme }) =>
			theme.breakpoints.tablet}) {
		text-align: start;
	} ;
`;
