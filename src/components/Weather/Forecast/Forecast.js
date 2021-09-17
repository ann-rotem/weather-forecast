import React from "react";
import * as S from "./Forecast.style";
import { Paragraph, IconWrapper } from "../Weather.style";
import { WeatherIcon } from "components/Icon";
import { round, convertUnixTime } from "utils/helpers/dateTime.helpers";

const Forecast = ({ data }) => {
	return (
		<S.Days>
			{data &&
				data.map((day, index) => {
					return (
						<S.Day key={day.dt} isOdd={Boolean(index % 2)}>
							<Paragraph>
								{convertUnixTime(day.dt, "date, weekday")}
							</Paragraph>

							<Paragraph>
								{round(day.temp.day)}&deg; - {round(day.temp.night)}
								&deg;
							</Paragraph>
							<IconWrapper>
								<WeatherIcon
									condition={day.weather[0].icon}
									size="30"
								/>
							</IconWrapper>
						</S.Day>
					);
				})}
		</S.Days>
	);
};

export default Forecast;
