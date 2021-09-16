import * as S from "./Header.style";
import Logo from "components/Logo/Logo";
import { ThemeToggler } from "components";
import Info from "components/Info/Info";

const Header = (props) => {
	const { theme, toggleTheme } = props;

	return (
		<S.Header>
			<S.HeaderMain>
				<Logo />
				<ThemeToggler theme={theme} handleChange={toggleTheme} />
			</S.HeaderMain>
			<S.HeaderBottom>
				<Info />
			</S.HeaderBottom>
		</S.Header>
	);
};

export default Header;
