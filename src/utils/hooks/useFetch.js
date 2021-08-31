import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (initialUrl) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(null);
	const [error, setError] = useState(null);
	const [url, setUrl] = useState(initialUrl);

	useEffect(() => {
		if (!url) return;
		setLoading(true);
		setData(null);
		setError(null);
		axios
			.get(url)
			.then((response) => {
				setLoading(false);
				if (response.cod >= 400) {
					setError(response);
					return;
				}
				setData(response.data);
				console.log(response.data);
			})
			.catch((error) => {
				setLoading(false);
				setError(error.response?.data);
				console.log(error.response);
			});
	}, [url]);

	return { data, error, loading, setUrl };
};

export default useFetch;
