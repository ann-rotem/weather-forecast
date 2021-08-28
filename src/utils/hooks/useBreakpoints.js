import { useState, useEffect } from "react";
import { breakpoints } from "utils/constants/breakpoints";

const getScreenSize = (screenWidth) => {
	const breakpointsArray = [];
	for (const key in breakpoints) {
		const currentBreakpoint = {
			key,
			size: breakpoints[key],
		};
		breakpointsArray.push(currentBreakpoint);
	}

	const breakpointsFilter = breakpointsArray.filter(
		({ size }) => size <= screenWidth
	);
	const { key } = breakpointsFilter[breakpointsFilter.length - 1];
	return key;
};

const useBreakpoints = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const [height, setHeight] = useState(window.innerHeight);

	const handleWindowResize = () => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	};

	useEffect(() => {
		window.addEventListener("resize", handleWindowResize);
		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	const screenSize = getScreenSize(width);

	return { width, height, screenSize };
};

export default useBreakpoints;
