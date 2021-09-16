import { useState, useEffect } from "react";
import * as S from "./Search.style";
import { SearchIcon, TargetIcon } from "components/Icon";
import { useGeolocation } from "utils/hooks";

const Search = ({ handleSearch, getCurrentLocationWeather }) => {
	const [query, setQuery] = useState("");
	const handleChange = (e) => setQuery(e.target.value);
	const { latitude, longitude, requestGeolocation } = useGeolocation();

	useEffect(() => {
		if (!latitude || !longitude) return;
		const userCoords = {
			lat: latitude,
			lon: longitude,
		};
		getCurrentLocationWeather(userCoords);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [latitude, longitude]);

	const handleSubmit = (e) => {
		e.preventDefault();
		handleSearch(query);
		setQuery("");
	};

	return (
		<S.SearchSection>
			<S.CurrentLocation
				type="button"
				onClick={requestGeolocation}
				aria-label="Current location weather"
			>
				<TargetIcon size="lg" />
			</S.CurrentLocation>
			<S.Form onSubmit={handleSubmit} role="search">
				<S.Label htmlFor="search">
					<span>Enter city, country, or zip code</span>
				</S.Label>
				<S.Input
					type="search"
					role="searchbox"
					id="search"
					name="search"
					title="search"
					required
					value={query}
					onChange={handleChange}
					placeholder="Enter location name"
					minLength="2"
					aria-label="search"
					autoComplete="off"
				/>
				<S.SearchButton
					role="button"
					type="submit"
					aria-label="Search button"
				>
					<SearchIcon size="lg" />
				</S.SearchButton>
			</S.Form>
		</S.SearchSection>
	);
};

export default Search;
