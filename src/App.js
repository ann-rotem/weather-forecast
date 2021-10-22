import { useState } from "react";
import { GlobalStyle } from "GlobalStyle";
import { themes } from "theme";
import { ThemeProvider } from "styled-components";
import { Footer, Header, Main } from "components";

function App() {
	const [mode, setMode] = useState("dark");
	const toggleTheme = () => setMode(mode === "light" ? "dark" : "light");

	return (
		<ThemeProvider theme={themes[mode]}>
			<GlobalStyle />
			<Header theme={mode} toggleTheme={toggleTheme} />
			<Main />
			<Footer />
		</ThemeProvider>
	);
}

export default App;
