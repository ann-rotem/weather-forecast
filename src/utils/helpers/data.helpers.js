import { convertUnixTime, round } from "./dateTime.helpers";

export const formatCurrentWeatherData = (data) => {
	let formattedData = {
		temp: round(data.temp),
		feels_like: round(data.feels_like),
		icon: data.weather[0].icon,
		description: data.weather[0].description,
		humidity: data.humidity,
		precipitation: data.pop,
		clouds: data.clouds,
		wind: data.wind_speed,
		uvi: data.uvi,
		dew: data.dew_point,
		sunset: convertUnixTime(data.sunset, "time"),
		sunrise: convertUnixTime(data.sunrise, "time"),
	};
	return formattedData;
};

export const formatHourlyData = (data) => {
	let chartData = {
		labels: [],
		temp: [],
		feels: [],
		humidity: [],
		precip: [],
	};
	data.forEach((hour) => {
		chartData.labels.push(convertUnixTime(hour.dt, "hour"));
		chartData.temp.push(round(hour.temp));
		chartData.feels.push(round(hour.feels_like));
		chartData.humidity.push(hour.humidity);
		chartData.precip.push(hour.pop * 100);
	});
	return chartData;
};

export const formatDailyData = (data) => {
	let dailyData = data.map((day, index) => {
		let formattedData = {
			weekday: convertUnixTime(day.dt, "weekday"),
			date: convertUnixTime(day.dt, "date"),
			icon: day.weather[0].icon,
			dayTemp: round(day.temp.day),
			nightTemp: round(day.temp.night),
			feels_like: round(day.feels_like.day),
			description: day.weather[0].description,
			humidity: day.humidity,
			precipitation: day.pop,
			clouds: day.clouds,
			sunset: convertUnixTime(day.sunset, "time"),
			sunrise: convertUnixTime(day.sunrise, "time"),
		};
		if (index === 0) {
			formattedData["weekday"] = "Today";
		}
		return formattedData;
	});
	return dailyData;
};
