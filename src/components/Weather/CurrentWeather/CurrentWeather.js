import React from "react";
import * as S from "./CurrentWeather.style";
import { round, convertUnixTime } from "utils/helpers/dateTime.helpers";

const CurrentWeather = ({ data }) => {
	const sunrise = convertUnixTime(data.sunrise, "time");
	const sunset = convertUnixTime(data.sunset, "time");
	return (
		<>
			<S.CurrentWeather>
				<S.Column>
					<h2>{round(data.temp)}°</h2>
					<>{data.weather[0].icon}</>
				</S.Column>
				<S.Column>
					<p>{convertUnixTime(data.dt, "date")}</p>
					<p>Feels like: {round(data.feels_like)}°</p>
					<p>{data.weather[0].description}</p>
					<p>Humidity: {data.humidity}%</p>
					<p>Sunrise: {sunrise}</p>
					<p>Sunset: {sunset}</p>
				</S.Column>
			</S.CurrentWeather>
		</>
	);
};

export default CurrentWeather;
