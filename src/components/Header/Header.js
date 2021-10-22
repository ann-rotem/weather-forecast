import * as S from "./Header.style";
import Logo from "components/Logo/Logo";
import { ThemeToggler } from "components";

const Header = (props) => {
	const { theme, toggleTheme } = props;

	return (
		<S.Header>
			<Logo />
			<ThemeToggler theme={theme} handleChange={toggleTheme} />
		</S.Header>
	);
};

export default Header;
