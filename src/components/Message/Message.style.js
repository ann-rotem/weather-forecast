import styled from "styled-components/macro";
import { GlassEffect } from "GlobalStyle";

export const MessageWrapper = styled.section`
	${GlassEffect}
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	text-align: center;
	padding: 1.5rem;

	border-radius: 2rem;
	width: min(30rem, calc(80% + 6rem));
	width: min(25rem, calc(80% + 6rem));
`;

export const Heading = styled.h2`
	font-size: clamp(1.8rem, 2.5vw, 2.8rem);
	font-weight: bolder;
	margin-bottom: 1rem;
	color: ${({ theme }) => theme.warning};
`;

export const Message = styled.p`
	font-size: 1em;
	font-weight: 300;
`;
