import styled from "styled-components";

export const Tabs = styled.section`
	display: flex;
	flex-direction: column;
	margin: 2rem auto;
	width: 100%;
	max-width: 25rem;
	height: auto;
	min-height: 20rem;
`;

export const ButtonGroup = styled.div`
	display: inline-flex;
	margin: 0 auto;
`;

export const TabButton = styled.button`
	display: inline-flex;
	padding: 0.7rem 1rem 0.4rem 1rem;
	margin: 0 0.3rem;
	font-size: 1.2rem;
	font-weight: 300;
	cursor: pointer;
	color: ${(props) =>
		props.active ? props.theme.textStrong : props.theme.text};
	background: ${({ theme }) => theme.backgroundContrast};
	border-radius: 40% 40% 0 0;

	border: none;
	opacity: ${(props) => (props.active ? "1" : "0.4")};
	box-shadow: ${({ theme }) => theme.shadowWeak};
	text-transform: capitalize;

	&:hover {
		color: ${(props) => props.theme.textStrong};
		opacity: 0.8;
	}
`;

export const TabContent = styled.article`
	display: flex;
	flex-direction: column;
	width: 100%;
	//padding: 1rem 0;
	background: ${({ theme }) => theme.backgroundContrast};
	border-radius: 1.5rem;
	box-shadow: ${({ theme }) => theme.shadow};
	overflow: hidden;
`;

export const CurrentDetails = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 0.5rem 0;
	color: ${({ theme }) => theme.text};
	border-bottom: 0.1rem solid ${({ theme }) => theme.backgroundPrimary};
`;

export const CurrentDateTime = styled.p`
	display: inline-flex;
	font-weight: 300;
	padding: 0.5rem 0;
`;

export const LocationWrapper = styled.span`
	display: flex;
	align-items: center;
	p {
		font-size: 1.2rem;
		padding-left: 0.5rem;
	}
`;
