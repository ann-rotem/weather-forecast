import React, { useState, useEffect } from "react";
import * as S from "./Search.style";
import { Button } from "components";
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

	const handleClick = () => {
		requestGeolocation();
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleSearch(query);
		setQuery("");
	};

	return (
		<S.SearchSection>
			<Button
				onClick={handleClick}
				type="icon"
				secondary
				labelText="current location weather"
			>
				<TargetIcon size="md" />
			</Button>
			<S.Form onSubmit={handleSubmit}>
				<S.Label htmlFor="search">Enter city, country, or zip code</S.Label>
				<S.SearchBar>
					<S.Input
						type="search"
						id="search"
						name="search"
						required
						value={query}
						// disabled={disabled}
						onChange={handleChange}
						minLength="2"
						autoComplete="off"
					/>

					<Button
						type="icon"
						primary
						labelText="search"
						children={<SearchIcon size="md" />}
					/>
				</S.SearchBar>
			</S.Form>
		</S.SearchSection>
	);
};

export default Search;
