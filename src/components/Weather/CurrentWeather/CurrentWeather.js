import React from "react";
import * as S from "./CurrentWeather.style";
import { WeatherIcon } from "components/Icon";
import { round, convertUnixTime } from "utils/helpers/dateTime.helpers";

const CurrentWeather = ({ data }) => {
	const sunrise = convertUnixTime(data.sys.sunrise, "time");
	const sunset = convertUnixTime(data.sys.sunset, "time");
	return (
		<>
			<S.CurrentWeather>
				<S.Temp>{round(data.main.temp)}°</S.Temp>
				<S.Icon>
					<WeatherIcon condition={data.weather[0].icon} size="120" />
				</S.Icon>
				<S.Details>
					<p>Feels like {round(data.main.feels_like)}°</p>
					<p>{data.weather[0].description}</p>
					<p>Humidity: {data.main.humidity}%</p>
					<p>Sunrise: {sunrise}</p>
					<p>Sunset: {sunset}</p>
				</S.Details>
			</S.CurrentWeather>
		</>
	);
};

export default CurrentWeather;
