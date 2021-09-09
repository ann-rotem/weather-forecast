import React from "react";
import * as S from "./Forecast.style";
import { WeatherIcon } from "components/Icon";
import { round, convertUnixTime } from "utils/helpers/dateTime.helpers";

const Forecast = ({ data }) => {
	return (
		<S.Forecast>
			<S.Days>
				{data &&
					data.map((day, index) => {
						return (
							<S.Day key={day.dt} isOdd={Boolean(index % 2)}>
								<p>{convertUnixTime(day.dt, "date, weekday")}</p>

								<p>
									{round(day.temp.day)}&deg; - {round(day.temp.night)}
									&deg;
								</p>
								<WeatherIcon
									condition={day.weather[0].icon}
									size="30"
								/>
							</S.Day>
						);
					})}
			</S.Days>
		</S.Forecast>
	);
};

export default Forecast;
