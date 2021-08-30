import React, { useState, useEffect } from "react";
import * as S from "./Main.style";
import axios from "axios";
import { Button, Search, Tabs } from "components";
import { TargetIcon } from "components/Icon";
import useGeolocation from "utils/hooks/useGeolocation";
import useBreakpoints from "utils/hooks/useBreakpoints";

const Main = () => {
	const { latitude, longitude, loading, locationError, requestGeolocation } =
		useGeolocation();
	const { width } = useBreakpoints();
	const [data, setData] = useState(null);
	const [status, setStatus] = useState(loading);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (latitude && longitude) {
			setStatus("pending");
			const fetchData = async (units = "metric") => {
				try {
					axios
						.get(
							`${process.env.REACT_APP_OPEN_WEATHER_URL}data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&units=${units}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
						)
						.then((response) => {
							setData(response.data);
							setStatus("succeeded");
						});
				} catch (err) {
					setError(err);
					setStatus("failed");
				}
			};
			fetchData();
		}
	}, [latitude, longitude]);
	if (status === "succeeded") {
		console.log(data);
	}

	return (
		<S.Main>
			<S.SearchSection width={width}>
				<Button onClick={requestGeolocation} type="icon" secondary>
					<TargetIcon size="lg" />
				</Button>
				<Search />
			</S.SearchSection>
			{status === "pending" && <p>Loading...</p>}
			{locationError ? (
				<p>{locationError}</p>
			) : error ? (
				<p>{error}</p>
			) : null}
			{data && <Tabs data={data} />}
		</S.Main>
	);
};

export default Main;
