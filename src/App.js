import { useState, useEffect } from "react";
import { GlobalStyle, lightTheme, darkTheme } from "GlobalStyle";
import { ThemeProvider } from "styled-components";
import { ErrorMessage, Footer, Header, Search, Tabs } from "components";
import { useGetCoordsByName, useGetWeatherByCoords } from "utils/hooks";

function App() {
	const [theme, setTheme] = useState("dark");
	const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

	const { coords, location, setQuery } = useGetCoordsByName();
	const {
		currentWeather,
		hourlyWeather,
		dailyWeather,
		loading,
		error,
		setCoords,
	} = useGetWeatherByCoords();

	useEffect(() => {
		if (!coords) return;
		setCoords(coords);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [coords]);

	const handleSearch = (searchTerm) => {
		setQuery(searchTerm);
	};

	const getCurrentLocationCoords = (userCoords) => {
		setCoords(userCoords);
	};

	return (
		<ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
			<GlobalStyle />
			<Header theme={theme} toggleTheme={toggleTheme} />
			<main>
				<Search
					handleSearch={handleSearch}
					getCurrentLocationWeather={getCurrentLocationCoords}
				/>
				{loading ? (
					<p>Loading...</p>
				) : error ? (
					<ErrorMessage error={error} />
				) : currentWeather ? (
					<Tabs
						location={location}
						currentWeather={currentWeather}
						hourlyWeather={hourlyWeather}
						dailyWeather={dailyWeather}
					/>
				) : null}
			</main>
			<Footer />
		</ThemeProvider>
	);
}

export default App;
