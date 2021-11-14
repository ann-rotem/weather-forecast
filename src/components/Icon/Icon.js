import {
	DewPointIcon,
	GithubIcon,
	HumidityIcon,
	LocationIcon,
	SearchIcon,
	SunriseIcon,
	SunsetIcon,
	TargetIcon,
	UviIcon,
	WindIcon,
} from "./uiIcons";

const Icon = ({ name, size, props, ref }) => {
	switch (name) {
		case "dew-point":
			return <DewPointIcon props={props} size={size} ref={ref} />;
		case "github":
			return <GithubIcon props={props} size={size} ref={ref} />;
		case "humidity":
			return <HumidityIcon size={size} props={props} ref={ref} />;
		case "location-pin":
			return <LocationIcon size={size} props={props} ref={ref} />;
		case "search":
			return <SearchIcon size={size} props={props} ref={ref} />;
		case "sunrise":
			return <SunriseIcon size={size} props={props} ref={ref} />;
		case "sunset":
			return <SunsetIcon size={size} props={props} ref={ref} />;
		case "target":
			return <TargetIcon size={size} props={props} ref={ref} />;
		case "uvi":
			return <UviIcon size={size} props={props} ref={ref} />;
		case "wind":
			return <WindIcon size={size} props={props} ref={ref} />;
		default:
			return null;
	}
};

export default Icon;
