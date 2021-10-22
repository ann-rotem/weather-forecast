import * as S from "./Hero.style";
import HeroImage from "./HeroImage";

const Hero = () => {
	return (
		<S.HeroWrapper>
			<S.Heading>Hourly, Daily and Current Weather Forecast</S.Heading>
			<S.ImageWrapper>
				<HeroImage />
			</S.ImageWrapper>

			{/* <S.Text weight="bold" size="1.5">
				Anytime. Anywhere.
			</S.Text> */}
			<S.TextWrapper>
				<S.Text>
					*To provide you with more accurate local forecast,
					<em>WeatherForecast</em> needs your permission to access the
					device's location
				</S.Text>
			</S.TextWrapper>
		</S.HeroWrapper>
	);
};

export default Hero;
