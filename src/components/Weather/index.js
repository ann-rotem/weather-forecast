import { useState, useEffect } from "react";
import * as S from "./Weather.style";
import PropTypes from "prop-types";
import Hourly from "./Hourly/Hourly";
import Daily from "./Daily/Daily";
import Current from "./CurrentWeather/CurrentWeather";
import { Icon } from "components/Icon";
import { getCurrentDate } from "utils/helpers/dateTime.helpers";
import {
	formatCurrentWeatherData,
	formatHourlyData,
	formatDailyData,
} from "utils/helpers/data.helpers";

const Weather = ({ location, data }) => {
	const [currentWeatherData, setCurrentWeatherData] = useState(null);
	const [hourlyData, setHourlyData] = useState(null);
	const [dailyData, setDailyData] = useState(null);

	useEffect(() => {
		if (!data) return;
		let currentWeatherFormatted = formatCurrentWeatherData(data.current);
		let hourlyFormatted = formatHourlyData(data.hourly.slice(1, 25));
		let dailyFormatted = formatDailyData(data.daily);
		setCurrentWeatherData(currentWeatherFormatted);
		setHourlyData(hourlyFormatted);
		setDailyData(dailyFormatted);
	}, [data]);

	const date = getCurrentDate();
	return (
		<S.WeatherSection>
			{location && (
				<S.Info>
					<S.InfoBox>
						<S.IconWrapper color="strong" size="1.5">
							<Icon name="location-pin" size="lg" />
						</S.IconWrapper>
						<S.Text size="1.2" weight="bold" color="strong">
							{location}
						</S.Text>
					</S.InfoBox>
					<S.InfoBox>
						<S.Text size="1.2">{date}</S.Text>
					</S.InfoBox>
				</S.Info>
			)}
			{currentWeatherData && (
				<Current data={currentWeatherData} location={location} />
			)}
			{hourlyData && <Hourly data={hourlyData} />}
			{dailyData && <Daily data={dailyData} />}
		</S.WeatherSection>
	);
};

Weather.propTypes = {
	location: PropTypes.string,
	data: PropTypes.object.isRequired,
};

export default Weather;
