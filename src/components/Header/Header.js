import React from "react";
import * as S from "./Header.style";
import { ThemeToggler } from "components";
import useBreakpoints from "utils/hooks/useBreakpoints";

const Header = (props) => {
	const { theme, toggleTheme } = props;
	const { width, screenSize } = useBreakpoints();
	return (
		<S.Header>
			<S.Logo screenSize={screenSize} width={width}>
				<span>Weather</span> Forecast
			</S.Logo>
			<ThemeToggler theme={theme} handleChange={toggleTheme} />
		</S.Header>
	);
};

export default Header;
