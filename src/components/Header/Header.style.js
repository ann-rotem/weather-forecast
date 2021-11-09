import styled from "styled-components/macro";

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: var(--header-height);
	padding: 0.5rem ${({ theme }) => theme.spacing.section.x};
`;

export const HeaderMain = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`;
