import styled from "styled-components";

export const Tabs = styled.section`
	display: flex;
	flex-direction: column;
	margin-top: 1rem;
	width: 100%;
	max-width: 20rem;
	height: auto;
	min-height: 20rem;
`;

export const TabList = styled.ul`
	display: flex;
	margin: 0 auto;
	list-style: none;
`;

export const Tab = styled.li`
	display: inline-flex;
	padding: 0.2rem 0.5rem;
	color: ${(props) =>
		props.active ? props.theme.primaryColor : props.theme.text};
	background: ${(props) => props.active && props.theme.backgroundContrast};
	border-radius: 40% 40% 0 0;

	&:hover {
		color: ${({ theme }) => theme.textStrong};
	}

	&:focus-visible {
		color: ${({ theme }) => theme.text};
		background: ${({ theme }) => theme.primaryColor};
	}
`;

export const ButtonGroup = styled.div`
	display: inline-flex;
	margin: 0 auto;
`;

export const TabButton = styled.button`
	display: inline-flex;
	padding: 0.35rem 1rem;
	margin: 0 0.5rem;
	font-weight: 300;
	color: ${(props) =>
		props.active ? props.theme.textStrong : props.theme.text};
	background: ${({ theme }) => theme.backgroundContrast};
	border-radius: 50% 50% 0 0 / 70%;
	border: none;
	opacity: ${(props) => (props.active ? "1" : "0.4")};
`;

export const TabContent = styled.article`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 0.5rem;
	background: ${({ theme }) => theme.backgroundContrast};
`;

export const CurrentDetails = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
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
