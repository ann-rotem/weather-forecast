export const round = (num) => Math.round(num);

let date = new Date();

export const getCurrentDate = () => {
	let options = {
		weekday: "short",
		year: "numeric",
		month: "long",
		day: "numeric",
	};
	return new Intl.DateTimeFormat("en-US", options).format(date);
};

export const getCurrentTime = () => {
	let options = {
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
	};
	return new Intl.DateTimeFormat("en-US", options).format(date);
};

export const isDay = () => {
	return new Intl.DateTimeFormat("en-US", { dayPeriod: "narrow" }).format(
		date
	);
};
