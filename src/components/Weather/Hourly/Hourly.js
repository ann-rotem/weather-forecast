import React, { useState } from "react";
import * as S from "./Hourly.style";
import { WeatherIcon } from "components/Icon";
import { round, convertUnixTime } from "utils/helpers/dateTime.helpers";

const Hourly = ({ data }) => {
	const hourlyData = data.slice(1, 25);
	const [active, setActive] = useState(hourlyData[0]);

	return (
		<S.Hourly>
			<S.ActiveWrapper condition={active.weather[0].icon}>
				<S.Background>
					<WeatherIcon condition={active.weather[0].icon} />
				</S.Background>
				<S.Row>
					<S.ActiveDateTime>
						<S.HourlyDate>
							{convertUnixTime(active.dt, "date")}
						</S.HourlyDate>
						<S.HourlyTime>
							{convertUnixTime(active.dt, "time")}
						</S.HourlyTime>
					</S.ActiveDateTime>
					<S.ActiveTemp>
						<h2>{round(active.temp)}&deg;</h2>
						<p>Feels like {round(active.feels_like)}&deg;</p>
					</S.ActiveTemp>
				</S.Row>
				<S.ActiveDetails>
					<p>{active.humidity}% Humidity</p>
					<p>{round(active.pop * 100)}% Precipitation</p>
				</S.ActiveDetails>
				<S.ActiveDetails>
					<p>{active.weather[0].description}</p>
					<p>{active.clouds}% Cloudiness</p>
				</S.ActiveDetails>
			</S.ActiveWrapper>

			<S.HourCards>
				{data &&
					hourlyData.map((hour, index) => {
						return (
							<S.HourCard
								key={hour.dt}
								active={active === hour}
								onClick={() => setActive(hour)}
							>
								<S.DateTime>
									<S.HourlyDate>
										{convertUnixTime(hour.dt, "date")}
									</S.HourlyDate>
									<S.HourlyTime>
										{convertUnixTime(hour.dt, "time")}
									</S.HourlyTime>
								</S.DateTime>
								<S.Temperature>{round(hour.temp)}&deg;</S.Temperature>
							</S.HourCard>
						);
					})}
			</S.HourCards>
		</S.Hourly>
	);
};

export default Hourly;
