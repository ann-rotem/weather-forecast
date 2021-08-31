import styled from "styled-components";

export const CurrentWeather = styled.div`
	color: ${({ theme }) => theme.text};
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr 2fr;
	max-height: 18rem;
	grid-template-areas:
		"temp       temp"
		"icon    details"
		"icon details";
	gap: 0.5rem;
	padding: 0.5rem;
`;

export const Temp = styled.h2`
	grid-area: temp;
	font-size: 5rem;
	text-align: center;
	font-weight: 800;
	color: ${({ theme }) => theme.textStrong};
	text-shadow: ${({ theme }) => theme.textShadow};
`;

export const Icon = styled.div`
	grid-area: icon;
	display: flex;
	justify-content: center;
	align-items: center;
	fill: ${({ theme }) => theme.icon};

	svg {
		filter: drop-shadow(${({ theme }) => theme.shadow});
	}
`;

export const Details = styled.div`
	grid-area: details;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	p {
		//padding: 0.2rem 0;
		font-size: 1rem;
		font-weight: 300;
		//line-height: 1.5;
	}
`;
