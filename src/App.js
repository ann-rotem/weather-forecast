import { useState } from "react";
import { GlobalStyle, lightTheme, darkTheme } from "GlobalStyle";
import { ThemeProvider } from "styled-components";
import { useFetch } from "utils/hooks";
import { ErrorMessage, Footer, Header, Search, Tabs } from "components";

function App() {
	const [theme, setTheme] = useState("dark");
	const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

	const { data, loading, error, setUrl } = useFetch();

	const handleSearch = (query, units = "metric") => {
		setUrl(
			`${process.env.REACT_APP_OPEN_WEATHER_URL}data/2.5/weather?q=${query}&units=${units}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
		);
	};

	return (
		<ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
			<GlobalStyle />
			<Header theme={theme} toggleTheme={toggleTheme} />
			<main>
				<Search handleSearch={handleSearch} />
				{loading ? (
					<p>Loading...</p>
				) : error ? (
					<ErrorMessage error={error} />
				) : data ? (
					<Tabs data={data} />
				) : null}
				{/* <Main /> */}
			</main>
			<Footer />
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
