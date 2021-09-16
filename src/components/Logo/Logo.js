import * as S from "./Logo.style";
import LogoIcon from "./LogoIcon";

const Logo = () => {
	return (
		<S.LogoWrapper>
			<LogoIcon />
			<S.LogoText>
				<h1>
					<span>Weather</span> Forecast
				</h1>
			</S.LogoText>
		</S.LogoWrapper>
	);
};

export default Logo;
