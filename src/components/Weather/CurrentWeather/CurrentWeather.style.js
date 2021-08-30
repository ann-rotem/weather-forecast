import styled from "styled-components";

export const CurrentWeather = styled.div`
	display: flex;
	padding-top: 0.5rem;
	color: ${({ theme }) => theme.textStrong};
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;

	p {
		padding: 0.2rem 0;
		font-size: 0.9rem;
	}

	h2 {
		font-size: 3rem;
		text-align: center;
		font-weight: 800;
	}
`;
