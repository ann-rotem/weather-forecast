import React from "react";
import * as S from "./Hero.style";

const Hero = () => {
	return (
		<S.HeroWrapper>
			<S.Heading>
				Get weather forecast for your current location or search for a
				different location
			</S.Heading>
			<S.Text>Please make sure you allow permission to geolocation</S.Text>
		</S.HeroWrapper>
	);
};

export default Hero;
