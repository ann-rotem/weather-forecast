import {
	GithubIcon,
	HumidityIcon,
	LocationIcon,
	SearchIcon,
	SunriseIcon,
	SunsetIcon,
	TargetIcon,
	WindIcon,
} from "./uiIcons";

const Icon = ({ name, props, ref }) => {
	switch (name) {
		case "github":
			return <GithubIcon props={props} ref={ref} />;
		case "humidity":
			return <HumidityIcon props={props} ref={ref} />;
		case "location-pin":
			return <LocationIcon props={props} ref={ref} />;
		case "search":
			return <SearchIcon props={props} ref={ref} />;
		case "sunrise":
			return <SunriseIcon props={props} ref={ref} />;
		case "sunset":
			return <SunsetIcon props={props} ref={ref} />;
		case "target":
			return <TargetIcon props={props} ref={ref} />;
		case "wind":
			return <WindIcon props={props} ref={ref} />;
		default:
			return null;
	}
};

export default Icon;
