import React, { useState } from "react";
import * as S from "./Tabs.style";
import { CurrentWeather, Forecast } from "components";
import { getCurrentTime, getCurrentDate } from "utils/helpers/dateTime.helpers";
import { LocationIcon } from "components/Icon";

const types = ["now", "hourly", "daily"];

const Tabs = ({ data }) => {
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
					<S.LocationWrapper>
						<LocationIcon />
						<p>
							{data.name}, {data.sys.country}{" "}
						</p>
					</S.LocationWrapper>

					<S.CurrentDateTime>
						{date} | {time}
					</S.CurrentDateTime>
				</S.CurrentDetails>
				{active === "now" && <CurrentWeather data={data} />}
				{active === "hourly" && <p>Hourly</p>}
				{active === "daily" && <Forecast />}
			</S.TabContent>
		</S.Tabs>
	);
};

export default Tabs;
