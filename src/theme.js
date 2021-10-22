import dayBackground from "assets/images/day.jpg";
import nightBackground from "assets/images/night.jpg";

const font = {
	family: "'Assistant',  Verdana, sans-serif",
	size: {
		small: "12px",
		medium: "16px",
		large: "20px",
	},
};

const breakpoints = {
	mobile: "320px",
	tablet: "768px",
	laptop: "1024px",
	desktop: "1440px",
};

export const themes = {
	light: {
		mode: "light",
		bgImage: `url(${dayBackground})`,
		colors: {
			text: {
				primary: "rgb(68, 68, 70)",
				weak: "rgb(138, 137, 137)",
				strong: "rgb(35, 35, 35)",
				link: "#3671b6",
			},
			background: {
				primary: "rgba(255, 255, 255, 0.6)",
				secondary: "rgba(235, 220, 225, 0.6)",
				contrast: "rgba(0,0,0,0.2)",
			},
			border: {
				primary: "#999",
				secondary: "#666",
			},
			status: {
				disabled: "#CCCCCC",
				focus: "#3671b6",
				error: "#b64444",
				warning: "#FFAA15",
				success: "#008567",
			},
		},
		elevation: {
			small: "0px 2px 4px #00000057",
			medium: "0px 6px 12px #0000002f",
			large: "0px 12px 24px #0000003d",
		},
		icon: {
			colors: {
				primary: "rgb(68, 68, 70)",
				weak: "rgb(187, 187, 187)",
			},
			elevation: {
				small: "1px 1px 2px #0000004e",
				medium: "2px 2px 3px #00000042",
			},
		},
		font,
		breakpoints,
	},
	dark: {
		mode: "dark",
		bgImage: `url(${nightBackground})`,
		colors: {
			text: {
				primary: "#C0CADC",
				weak: "#606B7D",
				strong: "#fff",
				link: "#fdc692",
			},
			background: {
				primary: "rgba(30,40,50,0.9)",
				secondary: "rgba(64, 75, 92, 0.7)",
				contrast: "rgba(255, 255, 255, 0.2)",
			},
			border: {
				primary: "#7887A1",
				secondary: "#AFBCD2",
			},
			status: {
				disabled: "#a8a8a8",
				focus: "#fdc692",
				error: "#fc5a5a",
				warning: "#F7E464",
				success: "#7DD892",
			},
		},
		elevation: {
			small: "0px 2px 4px #0000003d",
			medium: "0px 6px 12px #0000005c",
			large: "0px 12px 24px #0000007a",
		},
		icon: {
			colors: {
				primary: "#C0CADC",
				hover: "#606B7D",
			},
			elevation: {
				small: "1px 1px 2px #0000003d",
				medium: "2px 2px 3px #0000005c",
			},
		},
		font,
		breakpoints,
	},
};

export const darkTheme = {
	name: "dark",
	backgroundImage: `url(${nightBackground})`,
	primary: "#fdc692",
	secondary: "rgb(23, 23, 23)",
	//background: "rgba(38, 48, 64, 0.6)",
	background: "rgba(30,30,30,0.5)",
	backgroundSecondary: "rgba(64, 75, 92, 0.6)",
	backgroundContrast: "rgba(255, 255, 255, 0.2)",
	textStrong: "#fff",
	text: "#C0CADC",
	textWeak: "#606B7D",
	border: "#7887A1",
	borderStrong: "#AFBCD2",
	borderWeak: "#606B7D",
	success: "#17eba0",
	warning: "#fc5a5a",
	shadowWeak: "0px 2px 4px #0000003d",
	shadow: "0px 6px 12px #0000005c",
	shadowStrong: "0px 12px 24px #0000007a",
	shadowInset: "inset 0px 6px 12px rgba(130, 130, 130, 0.2)",
};

export const lightTheme = {
	name: "light",
	backgroundImage: `url(${dayBackground})`,
	primary: "#3671b6",
	secondary: "rgb(210, 240, 240)",
	//background: "rgba(240,240,240, 0.6)",
	background: "rgba(255, 255, 255, 0.4)",
	backgroundSecondary: "rgba(235, 220, 225, 0.6)",
	backgroundContrast: "rgba(0,0,0,0.2)",
	text: "rgb(68, 68, 70)",
	textStrong: "rgb(10, 10, 10)",
	textWeak: "rgb(187, 187, 187)",
	border: "#999",
	borderStrong: "#666",
	borderWeak: "#BBB",
	success: "#008567",
	warning: "#b64444",
	shadowWeak: "0px 2px 4px #0000001f",
	shadow: "0px 6px 12px #0000001f",
	shadowStrong: "0px 12px 24px #0000003d",
	shadowInset: "inset 6px 0px 12px rgba(250, 250, 250, 0.2)",
};
