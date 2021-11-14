import { useState } from "react";
import {
	CurrentLocation,
	Hero,
	Loader,
	Message,
	Search,
	Weather,
} from "components";
import axios from "axios";
import * as S from "./Main.style";

const Main = () => {
	const [location, setLocation] = useState(null);
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
	const BASE_URL = process.env.REACT_APP_OPEN_WEATHER_URL;

	// get current weather, hourly and daily forecast from API by coordinates
	const fetchWeatherByCoords = async (lat, lon) => {
		console.info("fetchWeather start");
		try {
			const response = await axios.get(
				`${BASE_URL}data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,alerts&appid=${API_KEY}`
			);
			console.info("fetch weather by coords finish: success");
			setLoading(false);
			setError(null);
			setData(response.data);
		} catch (err) {
			console.error(
				`fetch weather by coords failed. error (${err.code}): ${err.message}`
			);
			setLoading(false);
			setError(err.message);
			setData(null);
		}
	};

	const getGeolocation = () => {
		console.info("geolocation start");
		setLoading(true);
		setError(null);
		setLocation(null);
		const geolocationOptions = {
			maximumAge: 5 * 60 * 1000,
			timeout: 10 * 1000,
		};
		const handleSuccess = (position) => {
			fetchWeatherByCoords(
				position.coords.latitude,
				position.coords.longitude
			);
			setLocation("Current Location");
			console.info("geolocation finish: success");
		};
		const handleError = (err) => {
			console.error(`geolocation failed. error: ${err.message}`);
			switch (err.code) {
				case err.PERMISSION_DENIED:
					setError(
						"You have turned off your location. To see weather forecast for your current location, allow us to access your location service"
					);
					break;
				case err.POSITION_UNAVAILABLE:
					setError("Location information is unavailable.");
					break;
				case err.TIMEOUT:
					setError("The request to get user location timed out.");
					break;
				default:
					setError("An unknown error occurred.");
			}
			setLoading(false);
		};
		if (!navigator.geolocation) {
			setError("Geolocation is not supported by your browser");
			setLoading(false);
			console.warning("geolocation not supported");
		}
		navigator.geolocation.getCurrentPosition(
			handleSuccess,
			handleError,
			geolocationOptions
		);
	};

	// get latitude and longitude from query
	const forwardGeocoding = async (query) => {
		console.info("forward geocoding start");
		setLoading(true);
		setLocation(null);
		try {
			const response = await axios.get(
				`${process.env.REACT_APP_HERE_GEO_URL}?q=${query}&lang=en-US&apiKey=${process.env.REACT_APP_HERE_API_KEY}`
			);
			console.info("forward geocoding finish: success");
			const result = response.data.items[0];
			if (!result) {
				throw new Error(
					`Looks like we don't have any matches for ${query}. Check the spelling or try a more general term`
				);
			}
			fetchWeatherByCoords(result.position.lat, result.position.lng);
			setLocation(result.title);
			setError(null);
		} catch (err) {
			console.error(
				`forward geocoding failed. Error(${err.code}): ${err.message}`
			);
			setLoading(false);
			setError(err.message);
		}
	};

	return (
		<S.MainWrapper>
			<S.SearchSection>
				<CurrentLocation handleClick={getGeolocation} loading={loading} />
				<Search handleSearch={forwardGeocoding} loading={loading} />
			</S.SearchSection>

			{loading ? (
				<Loader />
			) : error ? (
				<Message type="error" message={error} />
			) : data ? (
				<Weather location={location} data={data} />
			) : (
				<Hero />
			)}
		</S.MainWrapper>
	);
};

export default Main;
