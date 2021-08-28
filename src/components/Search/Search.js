import React from "react";
import styled from "styled-components";
import { Button } from "components";
import { SearchIcon } from "components/Icon";

const Search = (props) => {
	const { value, setValue, handleSubmit, disabled = false } = props;
	return (
		<Form onSubmit={handleSubmit}>
			<Label htmlFor="search">Enter city, country, or zip code</Label>
			<SearchBar>
				<Input
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
			</SearchBar>
		</Form>
	);
};

export default Search;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0 1rem;
`;

const Label = styled.label`
	display: flex;
	padding: 0.5rem;
	color: ${({ theme }) => theme.textWeak};
	font-weight: 300;
`;

const SearchBar = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: ${({ theme }) => theme.shadow};
	background: ${({ theme }) => theme.backgroundSecondary};
	border-radius: 1.5rem;
`;

const Input = styled.input`
	display: inline-flex;
	font-size: 1rem;
	color: ${({ theme }) => theme.text};
	background: transparent;
	border: none;
	border-radius: 1.5rem 0 0 1.5rem;
	padding: 0.5rem;
	width: 70%;
	height: 100%;

	:focus:not(:focus-visible) {
		outline: none;
	}

	&:focus {
		outline: 1px solid ${({ theme }) => theme.primaryColor};
	}
`;
