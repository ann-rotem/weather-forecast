import styled from "styled-components/macro";

export const MainWrapper = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	min-height: var(--main-height);
	//height: 100%;
	padding: 0 ${({ theme }) => theme.spacing.section.x};

	@media only screen and (min-width: ${({ theme }) =>
			theme.breakpoints.desktop}) {
		//height: auto;
	}
`;

export const SearchSection = styled.section`
	display: flex;
	width: 100%;
	max-width: 40rem;
	height: 5rem;
	padding: 1rem 0;
	justify-content: space-around;
	align-items: center;

	@media only screen and (min-width: ${({ theme }) =>
			theme.breakpoints.laptop}) {
		height: 3rem;
		padding: 0;
	}
`;
