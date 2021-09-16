import React from "react";
import * as S from "./ThemeToggler.style";

const ThemeToggler = (props) => {
	const { theme, handleChange } = props;

	return (
		<S.Toggler onClick={handleChange} value={theme} aria-label="theme toggle">
			{theme === "dark" ? <S.Stars></S.Stars> : <S.Clouds></S.Clouds>}
			<S.Switch></S.Switch>
		</S.Toggler>
	);
};

export default ThemeToggler;
