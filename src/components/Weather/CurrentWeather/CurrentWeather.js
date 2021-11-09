import * as S from "./CurrentWeather.style";
import PropTypes from "prop-types";
import { Text, Title } from "../Weather.style";
import { WeatherIcon, Icon } from "components/Icon";

const CurrentWeather = ({ data }) => {
	return (
		<S.CurrentWeather>
			<Title>Current Weather</Title>
			<S.Wrapper>
				<S.CurrentTemp shadow>
					<h2>{data.temp}&deg;</h2>
					<p>Feels like {data.feels_like}&deg;</p>
				</S.CurrentTemp>
				<S.Description>{data.description}</S.Description>
				<S.Icon size="8">
					<WeatherIcon condition={data.icon} />
				</S.Icon>
			</S.Wrapper>

			<S.Details>
				<S.Detail>
					<S.DetailIcon>
						<Icon name="humidity" />
						<p>Humidity</p>
					</S.DetailIcon>
					<Text color="strong" size="1.1">
						{data.humidity}%
					</Text>
				</S.Detail>
				<S.Detail>
					<S.DetailIcon>
						<Icon name="wind" />
						<p>Wind</p>
					</S.DetailIcon>
					<Text color="strong" size="1.1">
						{data.wind} m/s
					</Text>
				</S.Detail>
				<S.Detail>
					<S.DetailIcon>
						<Icon name="sunrise" />
						<p>UVI</p>
					</S.DetailIcon>
					<Text color="strong" size="1.1">
						{data.uvi}
					</Text>
				</S.Detail>
				<S.Detail>
					<S.DetailIcon>
						<Icon name="sunset" />
						<p>Dew Point</p>
					</S.DetailIcon>
					<Text color="strong" size="1.1">
						{data.dew}&deg;
					</Text>
				</S.Detail>
			</S.Details>
		</S.CurrentWeather>
	);
};

CurrentWeather.propTypes = {
	data: PropTypes.shape({
		temp: PropTypes.number,
		feels_like: PropTypes.number,
		icon: PropTypes.string,
		description: PropTypes.string,
		humidity: PropTypes.number,
		precipitation: PropTypes.number,
		clouds: PropTypes.number,
		wind: PropTypes.number,
		uvi: PropTypes.number,
		dew: PropTypes.number,
		sunset: PropTypes.string,
		sunrise: PropTypes.string,
	}),
};

export default CurrentWeather;
