import styled, { keyframes } from "styled-components/macro";

export const LoaderWrapper = styled.div`
	display: flex;
	position: relative;
	align-items: center;
	justify-content: center;
	margin: auto 0;
`;

const spinner = keyframes`
    0% { transform: rotate(0deg)  }
    100% { transform: rotate(360deg)}
`;

export const Spinner = styled.span`
	display: flex;
	position: absolute;
	margin: auto;
	width: 6rem;
	height: 6rem;
	border: 2px solid ${({ theme }) => theme.colors.text.strong};
	border-radius: 50%;
	border-bottom: 3px solid ${({ theme }) => theme.colors.text.strong};
	border-top: 1px solid ${({ theme }) => theme.colors.text.primary};
	border-left: 2px solid transparent;
	animation: ${spinner} 600ms linear infinite;
`;

export const LoaderText = styled.p`
	font-size: 20px;
	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.text.strong};
	font-weight: bold;
`;
