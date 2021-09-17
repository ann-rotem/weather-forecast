import React, { useState } from "react";
import * as S from "./Hourly.style";
import { Paragraph, Temperature } from "../Weather.style";
import { WeatherIcon } from "components/Icon";
import { round, convertUnixTime } from "utils/helpers/dateTime.helpers";

const Hourly = ({ data }) => {
	const hourlyData = data.slice(1, 25);
	const [active, setActive] = useState(hourlyData[0]);

	return (
		<>
			<S.ActiveWrapper condition={active.weather[0].icon}>
				<S.Row>
					<S.ActiveDateTime>
						<S.HourlyDate>
							{convertUnixTime(active.dt, "date")}
						</S.HourlyDate>
						<S.HourlyTime>
							{convertUnixTime(active.dt, "time")}
						</S.HourlyTime>
					</S.ActiveDateTime>
					<Temperature shadow align="flex-end" marginBottom="1rem">
						<h2>{round(active.temp)}&deg;</h2>
						<Paragraph>
							Feels like {round(active.feels_like)}&deg;
						</Paragraph>
					</Temperature>
				</S.Row>
				<S.ActiveDetails>
					<Paragraph>{active.humidity}% Humidity</Paragraph>
					<Paragraph>{round(active.pop * 100)}% Precipitation</Paragraph>
				</S.ActiveDetails>
				<S.ActiveDetails>
					<Paragraph>{active.weather[0].description}</Paragraph>
					<Paragraph>{active.clouds}% Cloudiness</Paragraph>
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
									<Paragraph weak>
										{convertUnixTime(hour.dt, "date")}
									</Paragraph>
									<Paragraph strong>
										{convertUnixTime(hour.dt, "time")}
									</Paragraph>
								</S.DateTime>
								<WeatherIcon condition={hour.weather[0].icon} />
								<Temperature shadow size="1.5" bold>
									{round(hour.temp)}&deg;
								</Temperature>
							</S.HourCard>
						);
					})}
			</S.HourCards>
		</>
	);
};

export default Hourly;
