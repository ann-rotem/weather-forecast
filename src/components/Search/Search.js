import React, { useState } from "react";
import * as S from "./Search.style";
import { Button } from "components";
import { SearchIcon, TargetIcon } from "components/Icon";
//import { useGeolocation } from "utils/hooks";

const Search = ({ handleSearch }) => {
	const [query, setQuery] = useState("");
	const handleChange = (e) => setQuery(e.target.value);

	const handleSubmit = (e) => {
		e.preventDefault();
		handleSearch(query);
		setQuery("");
	};

	return (
		<S.SearchSection>
			<Button onClick={handleSubmit} type="icon" secondary>
				<TargetIcon size="lg" />
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
						children={<SearchIcon size="lg" />}
					/>
				</S.SearchBar>
			</S.Form>
		</S.SearchSection>
	);
};

export default Search;
