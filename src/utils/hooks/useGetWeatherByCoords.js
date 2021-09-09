import { useState, useEffect } from "react";
import axios from "axios";

const useGetWeatherByCoords = () => {
	const [coords, setCoords] = useState(null);
	const [currentWeather, setCurrentWeather] = useState(null);
	const [hourlyWeather, setHourlyWeather] = useState(null);
	const [dailyWeather, setDailyWeather] = useState(null);
	const [loading, setLoading] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!coords) return;
		// Set initial state
		setLoading(true);
		setError(null);
		setCurrentWeather(null);
		setHourlyWeather(null);
		setDailyWeather(null);
		axios
			.get(
				`${process.env.REACT_APP_OPEN_WEATHER_URL}data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&units=metric&exclude=minutely,alerts&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
			)
			.then((response) => {
				setLoading(false);
				setCurrentWeather(response.data.current);
				setHourlyWeather(response.data.hourly);
				setDailyWeather(response.data.daily);
			})
			.catch((error) => {
				setLoading(false);
				console.log(error);
				setError(error);
			});
	}, [coords]);

	return {
		currentWeather,
		hourlyWeather,
		dailyWeather,
		loading,
		error,
		setCoords,
	};
};

export default useGetWeatherByCoords;
