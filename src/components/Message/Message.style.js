import styled from "styled-components/macro";

export const MessageWrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	text-align: center;
	padding: 1.5rem;
	margin: auto 0;
	border-radius: 2rem;
	width: 20rem;
	background: ${({ theme }) => theme.colors.background.primary};
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
