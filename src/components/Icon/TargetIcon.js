import React, { forwardRef } from "react";
import { Icon } from "./Icon.style";

const TargetIcon = forwardRef((props, ref) => (
	<Icon
		ref={ref}
		viewBox="0 0 16 16"
		fillRule="evenodd"
		stroke="none"
		fill="currentColor"
		{...props}
	>
		<path d="M8 10.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5zm.5-9a.5.5 0 0 0-1 0v1.525A5.002 5.002 0 0 0 3.025 7.5H1.5a.5.5 0 0 0 0 1h1.525A5.002 5.002 0 0 0 7.5 12.976V14.5a.5.5 0 0 0 1 0v-1.524A5.002 5.002 0 0 0 12.975 8.5H14.5a.5.5 0 1 0 0-1h-1.525A5.002 5.002 0 0 0 8.5 3.025V1.5zM8 12a4 4 0 1 1 0-8a4 4 0 0 1 0 8z" />
	</Icon>
));
// const TargetIcon = ({ size }) => {
// 	return (
// 		<svg
// 			xmlns="http://www.w3.org/2000/svg"
// 			aria-labelledby="currentLocation"
// 			viewBox="0 0 16 16"
// 			width={size || 32}
// 			height={size || 32}
// 			fill="currentColor"
// 		>
// 			<title id="currentLocation">Current location</title>
// 			<path d="M8 10.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5zm.5-9a.5.5 0 0 0-1 0v1.525A5.002 5.002 0 0 0 3.025 7.5H1.5a.5.5 0 0 0 0 1h1.525A5.002 5.002 0 0 0 7.5 12.976V14.5a.5.5 0 0 0 1 0v-1.524A5.002 5.002 0 0 0 12.975 8.5H14.5a.5.5 0 1 0 0-1h-1.525A5.002 5.002 0 0 0 8.5 3.025V1.5zM8 12a4 4 0 1 1 0-8a4 4 0 0 1 0 8z" />
// 		</svg>
// 	);
// };

export default TargetIcon;
