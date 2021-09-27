import { forwardRef } from "react";
import styled, { css } from "styled-components/macro";

const sizesToNum = {
	sm: 0.5,
	md: 1,
	lg: 2,
	xl: 3,
	xxl: 6,
};

const colorCss = (props) => css`
	fill: ${(props) => props.color};
	stroke: ${(props) => props.color};
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
	${(props) => (props.color ? props.color : colorCss())}
	padding: ${({ padding }) => `${padding}em` || 0};
`;

export { Icon };
