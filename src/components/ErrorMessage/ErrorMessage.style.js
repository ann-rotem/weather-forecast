import styled from "styled-components";

export const ErrorMessageWrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1rem 2rem;
	margin: 3rem auto;

	background: ${({ theme }) => theme.backgroundContrast};
	border-radius: 15% / 90%;
`;

export const Heading = styled.h2`
	color: ${({ theme }) => theme.text};
	font-size: 2rem;
	font-weight: 800;
	text-align: center;
	margin-bottom: 1rem;
`;

export const Message = styled.p`
	color: ${({ theme }) => theme.text};
	font-size: 1.2rem;
	font-weight: 300;
	text-align: center;
	margin: 0.5rem 0;
`;

export const ErrorText = styled.p`
	color: ${({ theme }) => theme.warning};
	font-size: 1.2rem;
	text-transform: capitalize;
`;
