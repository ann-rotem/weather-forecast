import { useState } from "react";
import { GlobalStyle, lightTheme, darkTheme } from "GlobalStyle";
import { ThemeProvider } from "styled-components";
//import Search from "components/Search/Search";
import { Header, Main } from "components";
import * as S from "./styles";

function App() {
	const [theme, setTheme] = useState("dark");
	const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

	return (
		<ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
			<GlobalStyle />
			<Header theme={theme} toggleTheme={toggleTheme} />
			<Main />
			<S.Footer>Footer </S.Footer>
		</ThemeProvider>
	);
}

export default App;

// {
// 	/* <S.Header>
// 					<S.Logo screenSize={screenSize} width={width}>
// 						<span>Weather</span> Forecast
// 					</S.Logo>
// 					<ThemeToggler theme={theme} handleChange={toggleTheme} />
// 				</S.Header> */
// }
