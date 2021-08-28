import styled, { css } from "styled-components";

const sizesToNum = {
	sm: 0.5,
	md: 1,
	lg: 2,
};

const primaryStyle = (props) => css`
	background: ${({ theme }) => theme.primaryColor};
	color: ${({ theme }) => theme.backgroundPrimary};
	font-weight: 500;

	border: 0.1rem solid transparent;
	fill: ${({ theme }) => theme.backgroundPrimary};
`;

const secondaryStyle = (props) => css`
	background: transparent;
	color: ${({ theme }) => theme.primaryColor};
	border: 0.1rem solid ${({ theme }) => theme.primaryColor};
	fill: ${({ theme }) => theme.primaryColor};
`;

const buttonStyle = (props) => css`
	border-radius: 25% / 50%;
	padding: 0.5rem 1rem;
	margin: 0.5rem;
	letter-spacing: 1px;
	${(props) => props.primary && primaryStyle(props)};
	${(props) => props.secondary && secondaryStyle(props)};
`;

const iconStyle = (props) => css`
	border: 0.1rem solid ${({ theme }) => theme.primaryColor};
	border-radius: 50%;
	line-height: 1;
	aspect-ratio: 1;

	${({ size, padding }) => {
		const sizeNum = sizesToNum[size];
		return `
        padding: ${sizeNum / 3}rem;
        max-height: ${sizeNum * 4}rem;
    `;
	}}
	aspect-ratio: 1;

	${(props) => props.primary && primaryStyle(props)};
	${(props) => props.secondary && secondaryStyle(props)};
`;

export const StyledButton = styled.button`
	display: inline-block;
	box-sizing: border-box;
	cursor: pointer;
	font: inherit;
	text-decoration: none;
	margin: 0;
	background: transparent;
	overflow: visible;
	text-transform: none;

	border: none;

	box-shadow: ${({ theme }) => theme.shadow};
	${(props) => props.type === "icon" && iconStyle(props)};
	${(props) => props.type === "button" && buttonStyle(props)};

	&:hover:not(:disabled),
	&:focus-visible {
		transform: scale(1.1);
		outline: 0;
		box-shadow: ${({ theme }) => theme.shadowStrong};
	}
`;
