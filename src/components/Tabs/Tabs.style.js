import styled from "styled-components/macro";
import { breakpoints } from "utils/constants/breakpoints";

export const Tabs = styled.section`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	width: 100%;
	height: 100%;
	overflow: hidden;
	border-radius: 0 0 1.5rem 1.5rem;

	@media only screen and (min-width: ${breakpoints.sm}px) {
		max-width: 25rem;
	}
	/* @media only screen and (min-width: ${breakpoints.lg}px) {
		max-height: 100%;
		max-width: 40rem;
	} */
`;

export const ButtonGroup = styled.div`
	display: inline-flex;
	margin: 0 auto;
	height: 2rem;

	@media only screen and (min-width: ${breakpoints.sm}px) {
		height: 2.5rem;
	}
`;

export const TabButton = styled.button`
	display: inline-flex;
	padding: 0.5rem 1rem 0.3rem 1rem;
	margin: 0 0.3rem;
	font-size: 0.8rem;
	font-weight: 300;
	cursor: pointer;
	color: ${(props) =>
		props.active ? props.theme.textStrong : props.theme.text};
	background: ${({ theme }) => theme.backgroundContrast};
	border-radius: 40% 40% 0 0;
	border: none;
	opacity: ${(props) => (props.active ? "1" : "0.4")};
	box-shadow: ${({ theme }) => theme.shadow};
	text-transform: capitalize;

	&:hover {
		color: ${(props) => props.theme.textStrong};
		opacity: 0.8;
	}

	@media only screen and (min-width: ${breakpoints.sm}px) {
		padding: 0.7rem 1rem 0.4rem 1rem;
		font-size: 1.2rem;
	}
`;

export const TabContent = styled.article`
	display: flex;
	flex-direction: column;
	height: calc(100% - 2.5rem);
	background-origin: border-box;
	border-radius: 1.5rem;

	@media only screen and (min-width: ${breakpoints.lg}px) {
		//max-height: 80%;
	}
`;

export const CurrentDetails = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.backgroundContrast};
	border-radius: 1.5rem 1.5rem 0 0;
	width: 100%;
	height: 4.5rem;
	padding: 0.2rem 0;
	color: ${({ theme }) => theme.text};
	border-bottom: 0.1rem solid ${({ theme }) => theme.backgroundPrimary};

	@media only screen and (min-width: ${breakpoints.sm}px) {
		padding: 0.5rem 0;
	}
`;

export const CurrentDateTime = styled.p`
	display: inline-flex;
	font-weight: 300;
	padding: 0.3rem 0;
`;

export const LocationWrapper = styled.span`
	display: flex;
	align-items: center;
	p {
		font-size: 1.2rem;
		padding-left: 0.5rem;
	}
`;
