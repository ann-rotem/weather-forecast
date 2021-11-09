import {
	SunIcon,
	MoonIcon,
	SunCloudIcon,
	MoonCloudIcon,
	CloudIcon,
	CloudsIcon,
	RainIcon,
	SnowIcon,
	ThunderstormIcon,
} from "./weatherIcons";

const WeatherIcon = ({ condition, size }) => {
	switch (condition) {
		case "01d": //clear sky day
			return <SunIcon size={size} />;
		case "01n": //clear sky night
			return <MoonIcon size={size} />;
		case "02d": //few clouds day
			return <SunCloudIcon size={size} />;
		case "02n": //few clouds night
			return <MoonCloudIcon size={size} />;
		case "03d": //scattered clouds day
			return <CloudIcon size={size} />;
		case "03n": //scattered clouds night
			return <CloudIcon size={size} />;
		case "04d": //broken clouds day
			return <CloudsIcon size={size} />;
		case "04n": //broken clouds night
			return <CloudsIcon size={size} />;
		case "09d": // shower rain day
			return <RainIcon size={size} />;
		case "09n": // shower rain night
			return <RainIcon size={size} />;
		case "10d": // rain day
			return <RainIcon size={size} />;
		case "10n": // rain night
			return <RainIcon size={size} />;
		case "11d": // thunderstorm day
			return <ThunderstormIcon size={size} />;
		case "11n": // thunderstorm night
			return <ThunderstormIcon size={size} />;
		case "13d": // snow day
			return <SnowIcon size={size} />;
		case "13n": // snow night
			return <SnowIcon size={size} />;
		case "50d": // mist day
			return <SunIcon size={size} />;
		case "50n": // mist night
			return <MoonIcon size={size} />;
		default:
			return <SunCloudIcon size={size} />;
	}
};

export default WeatherIcon;
