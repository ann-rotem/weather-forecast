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

export const convertUnixTime = (unix, format) => {
	const options = {
		hour12: false,
	};
	if (format === "date") {
		options.day = "2-digit";
		options.month = "2-digit";
	}
	if (format === "weekday") {
		options.weekday = "short";
	}
	if (format === "date, weekday") {
		options.weekday = "short";
		options.month = "2-digit";
		options.day = "2-digit";
	}
	if (format === "time") {
		options.hour = "2-digit";
		options.minute = "2-digit";
	}
	if (format === "hour") {
		options.hour = "2-digit";
	}

	return new Intl.DateTimeFormat("default", options).format(unix * 1000);
};
