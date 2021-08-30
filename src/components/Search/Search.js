import React from "react";
import * as S from "./Search.style";
import { Button } from "components";
import { SearchIcon } from "components/Icon";

const Search = (props) => {
	const { value, setValue, handleSubmit, disabled = false } = props;
	return (
		<S.Form onSubmit={handleSubmit}>
			<S.Label htmlFor="search">Enter city, country, or zip code</S.Label>
			<S.SearchBar>
				<S.Input
					type="search"
					id="search"
					name="search"
					required
					value={value}
					disabled={disabled}
					onChange={setValue}
					minLength="2"
					autoComplete="off"
				/>

				<Button type="icon" primary children={<SearchIcon size="lg" />} />
			</S.SearchBar>
		</S.Form>
	);
};

export default Search;
