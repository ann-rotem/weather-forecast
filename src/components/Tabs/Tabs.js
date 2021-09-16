import { useState } from "react";
import * as S from "./Tabs.style";
import { CurrentWeather, Forecast, Hourly } from "components";
import { getCurrentTime, getCurrentDate } from "utils/helpers/dateTime.helpers";
import { LocationIcon } from "components/Icon";

const types = ["now", "hourly", "daily"];

const Tabs = ({ location, currentWeather, hourlyWeather, dailyWeather }) => {
	const [active, setActive] = useState(types[0]);
	const time = getCurrentTime();
	const date = getCurrentDate();
	return (
		<S.Tabs>
			<S.ButtonGroup>
				{types.map((type) => (
					<S.TabButton
						key={type}
						active={active === type}
						onClick={() => setActive(type)}
					>
						{type}
					</S.TabButton>
				))}
			</S.ButtonGroup>

			<S.TabContent>
				<S.CurrentDetails>
					{location && (
						<S.LocationWrapper>
							<LocationIcon />
							<p>
								{location.city}, {location.country}
							</p>
						</S.LocationWrapper>
					)}
					<S.CurrentDateTime>
						{date} | {time}
					</S.CurrentDateTime>
				</S.CurrentDetails>
				<S.WeatherWrapper>
					{active === "now" && <CurrentWeather data={currentWeather} />}
					{active === "hourly" && <Hourly data={hourlyWeather} />}
					{active === "daily" && <Forecast data={dailyWeather} />}
				</S.WeatherWrapper>
			</S.TabContent>
		</S.Tabs>
	);
};

export default Tabs;
