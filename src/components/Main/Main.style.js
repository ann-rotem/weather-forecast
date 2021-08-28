import styled from "styled-components";
import { breakpoints } from "utils/constants/breakpoints";

export const Main = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	height: calc(100vh - var(--header-height) - var(--footer-height));
	padding: 2rem;
	overflow: hidden;
`;

export const SearchSection = styled.section`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	width: ${(props) => (props.width <= breakpoints.sm ? "100%" : "auto")};
`;
