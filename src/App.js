import { useState } from "react";
import { GlobalStyle, lightTheme, darkTheme } from "GlobalStyle";
import { ThemeProvider } from "styled-components";
import { Footer, Header, Main } from "components";

function App() {
	const [theme, setTheme] = useState("dark");
	const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

	return (
		<ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
			<GlobalStyle />
			<Header theme={theme} toggleTheme={toggleTheme} />
			<Main />
			<Footer />
		</ThemeProvider>
	);
}

export default App;
