import * as S from "./Daily.style";
import PropTypes from "prop-types";
import { IconWrapper, Text } from "../Weather.style";
import { WeatherIcon } from "components/Icon";

const Day = ({ day, index, active, handleToggle }) => {
	return (
		<S.Day active={active} index={index} onClick={handleToggle}>
			<S.Container>
				<S.Box>
					<Text color="strong">{day.weekday}</Text>
					<Text size="0.8">{day.date}</Text>
				</S.Box>
				<IconWrapper size="2">
					<WeatherIcon condition={day.icon} />
				</IconWrapper>
				<S.Box row gap="0.2">
					<Text size="1.3" color="strong" weight="bold">
						{day.dayTemp}&deg;/
					</Text>
					<Text size="1.1"> {day.nightTemp}&deg;</Text>
				</S.Box>
				<S.Box>
					<S.Chevron active={active}></S.Chevron>
				</S.Box>
			</S.Container>

			<S.Expanded active={active}>
				<S.Container justify="center">
					<Text size="1.1" align="center" weight="bold" color="strong">
						{day.description}
					</Text>
				</S.Container>
				<S.DailyDetails>
					<S.Container padding="0">
						<Text>Feels Like:</Text>
						<Text color="strong">{day.feels_like}&deg;</Text>
					</S.Container>
					<S.Container padding="0">
						<Text>Humidity:</Text>
						<Text color="strong">{day.humidity}%</Text>
					</S.Container>
					<S.Container padding="0">
						<Text>Precipitation:</Text>
						<Text color="strong">{day.precipitation}%</Text>
					</S.Container>
					<S.Container padding="0">
						<Text>Clouds:</Text>
						<Text color="strong">{day.clouds}%</Text>
					</S.Container>
					<S.Container padding="0">
						<Text>Sunrise:</Text>
						<Text color="strong">{day.sunrise}</Text>
					</S.Container>
					<S.Container padding="0">
						<Text>Sunset:</Text>
						<Text color="strong">{day.sunset}</Text>
					</S.Container>
				</S.DailyDetails>
			</S.Expanded>
		</S.Day>
	);
};

Day.propTypes = {
	day: PropTypes.shape({
		weekday: PropTypes.string,
		date: PropTypes.string,
		icon: PropTypes.string,
		dayTemp: PropTypes.number,
		nightTemp: PropTypes.number,
		feels_like: PropTypes.number,
		description: PropTypes.string,
		humidity: PropTypes.number,
		precipitation: PropTypes.number,
		clouds: PropTypes.number,
		sunset: PropTypes.string,
		sunrise: PropTypes.string,
	}),
	index: PropTypes.number,
	active: PropTypes.bool,
	handleToggle: PropTypes.func,
};

export default Day;
