import React, { forwardRef } from "react";
import styled, { css } from "styled-components";

const sizesToNum = {
	sm: 0.5,
	md: 1,
	lg: 2,
	xl: 4,
	xxl: 6,
};

const colorCss = (props) => css`
	fill: ${(props) => props.color || `inherit`};
	stroke: ${(props) => props.color || `inherit`};
	g {
		fill: inherit;
		stroke: inherit;
	}
	path {
		fill: inherit;
		stroke: inherit;
	}
`;

const Svg = forwardRef(({ size, color, ...rest }, ref) => (
	<svg ref={ref} {...rest} />
));

const Icon = styled(Svg)`
	display: inline-block;
	flex: 0 0 auto;
	${({ size = "md", viewBox }) => {
		const [, , w, h] = (viewBox || "0 0 32 32").split(" ");
		const scale = w / h;
		const sizeNum = sizesToNum[size];

		if (w < h) {
			return `
            width: ${sizeNum}rem;
            height: ${sizeNum / scale}rem;
        `;
		}
		if (h < w) {
			return `
            width: ${sizeNum * scale}rem;
            height: ${sizeNum}rem;
        `;
		}
		return `
        width: ${sizeNum}rem;
        height: ${sizeNum}rem;
    `;
	}}
	${({ color }) => color !== "plain" && colorCss()}
`;

export { Icon };
