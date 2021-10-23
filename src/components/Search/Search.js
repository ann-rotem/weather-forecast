import { useState } from "react";
import PropTypes from "prop-types";
import * as S from "./Search.style";
import { SearchIcon } from "components/Icon";

const Search = ({ handleSearch }) => {
	const [inputValue, setInputValue] = useState("");

	const handleChange = (e) => setInputValue(e.target.value);

	const handleSubmit = (e) => {
		e.preventDefault();
		handleSearch(inputValue);
		setInputValue("");
	};

	return (
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
				value={inputValue}
				onChange={handleChange}
				placeholder="Search location"
				minLength="3"
				aria-label="search"
				autoComplete="off"
			/>
			<S.SearchButton role="button" type="submit" aria-label="Search button">
				<SearchIcon size="lg" />
			</S.SearchButton>
		</S.Form>
	);
};

Search.propTypes = {
	handleSearch: PropTypes.func,
};

export default Search;
