import styled from "styled-components/macro";

export const LogoWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const LogoText = styled.h1`
	font-weight: 800;
	text-shadow: ${({ theme }) => theme.elevation.small};
	color: ${({ theme }) => theme.colors.text.strong};
	line-height: 1;
	font-style: italic;

	span {
		font-weight: 500;
	}
`;
