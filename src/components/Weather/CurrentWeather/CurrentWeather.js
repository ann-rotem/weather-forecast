import React from "react";
import * as S from "./CurrentWeather.style";
import { Paragraph } from "../Weather.style";
import { WeatherIcon } from "components/Icon";
import { round, convertUnixTime } from "utils/helpers/dateTime.helpers";

const CurrentWeather = ({ data }) => {
	const sunrise = convertUnixTime(data.sunrise, "time");
	const sunset = convertUnixTime(data.sunset, "time");
	return (
		<>
			<S.CurrentWeather>
				<S.CurrentTemp shadow>
					<h2>{round(data.temp)}&deg;</h2>
					<Paragraph>Feels like {round(data.feels_like)}&deg;</Paragraph>
				</S.CurrentTemp>
				<S.Icon>
					<WeatherIcon condition={data.weather[0].icon} />
					<Paragraph>{data.weather[0].description}</Paragraph>
				</S.Icon>
				<S.Details>
					<Paragraph>Sunrise: {sunrise}</Paragraph>
					<Paragraph>Sunset: {sunset}</Paragraph>
				</S.Details>
			</S.CurrentWeather>
		</>
	);
};

export default CurrentWeather;
