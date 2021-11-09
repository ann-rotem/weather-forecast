import { useState, useEffect } from "react";
import axios from "axios";

const useGetWeatherByCoords = (latitude, longitude) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(null);
	const [error, setError] = useState(null);
	const [isRequested, setIsRequested] = useState(false);

	const requestWeather = () => setIsRequested(true);

	useEffect(() => {
		if (!isRequested) return;
		setLoading(true);
		axios
			.get(
				`${process.env.REACT_APP_OPEN_WEATHER_URL}data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely,alerts&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
			)
			.then((response) => {
				setData(response.data);
				setLoading(false);
				setError(null);
			})
			.catch((err) => {
				console.log(err.toJSON());
				setError(err);
				setLoading(false);
			});
		return () => {
			setIsRequested(false);
		};
	}, [isRequested, latitude, longitude]);

	return {
		data,
		loading,
		error,
		requestWeather,
	};
};

export default useGetWeatherByCoords;
