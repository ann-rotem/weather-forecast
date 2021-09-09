import { useState, useEffect } from "react";
import axios from "axios";

const useGetCoordsByName = (name) => {
	const [query, setQuery] = useState(null);
	const [coords, setCoords] = useState(null);
	const [location, setLocation] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!query) return;
		// Set initial state
		setError(null);
		setCoords(null);
		setLocation(null);
		axios
			.get(
				`${process.env.REACT_APP_OPEN_WEATHER_URL}geo/1.0/direct?q=${query}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
			)
			.then((response) => {
				console.log(response);
				setCoords({
					lat: response.data[0].lat,
					lon: response.data[0].lon,
				});
				setLocation({
					city: response.data[0].name,
					country: response.data[0].country,
				});
			})
			.catch((error) => {
				setError(error);
				console.log(error);
			});
	}, [query]);

	return { coords, location, error, setQuery };
};

export default useGetCoordsByName;
