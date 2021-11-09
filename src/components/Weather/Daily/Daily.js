import { useState } from "react";
import PropTypes from "prop-types";
import * as S from "./Daily.style";
import Day from "./Day";
import { Title } from "../Weather.style";

const Daily = ({ data }) => {
	const [clicked, setClicked] = useState(0);

	const handleToggle = (index) => {
		if (clicked === index) {
			setClicked("");
			return;
		}
		setClicked(index);
	};

	return (
		<S.Daily>
			<Title>Daily Forecast</Title>
			<S.Wrapper>
				{data &&
					data.map((day, index) => (
						<Day
							key={day.date}
							index={index}
							day={day}
							active={clicked === index}
							handleToggle={() => handleToggle(index)}
						/>
					))}
			</S.Wrapper>
		</S.Daily>
	);
};

Daily.propTypes = {
	data: PropTypes.array.isRequired,
};

export default Daily;
