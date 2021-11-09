import dayBackground from "assets/images/day.jpg";
import nightBackground from "assets/images/night.jpg";

const font = {
	family: "'Assistant',  Verdana, sans-serif",
	size: {
		small: "12px",
		medium: "16px",
		large: "20px",
	},
	weight: {
		light: "300",
		normal: "500",
		bold: "800",
	},
};

const breakpoints = {
	mobile: "320px",
	tablet: "768px",
	laptop: "1024px",
	desktop: "1440px",
};

const spacing = {
	xSmall: "0.25rem",
	small: "0.5rem",
	medium: "1rem",
	large: "2rem",
	section: {
		y: "1vh",
		x: "4vw",
	},
};

export const themes = {
	light: {
		mode: "light",
		bgImage: `url(${dayBackground})`,
		colors: {
			text: {
				primary: "rgb(68, 68, 70)",
				weak: "rgb(138, 137, 137)",
				strong: "rgb(50, 45, 40)",
				link: "#3671b6",
			},
			background: {
				primary: "rgba(255, 255, 255, 0.6)",
				secondary: "rgba(200, 205, 215, 0.6)",
				contrast: "rgba(0, 5, 15, 0.2)",
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
			chart: {
				datasetY: "#d8a548",
				datasetY1: "#3671b6",
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
		spacing,
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
			chart: {
				datasetY: "#fdc692",
				datasetY1: "#c8a0f8",
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
		spacing,
	},
};
