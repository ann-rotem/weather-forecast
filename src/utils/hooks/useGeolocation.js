import { useState, useEffect } from "react";

const useGeolocation = () => {
	const [isAvailable, setIsAvailable] = useState(false);
	const [latitude, setLatitude] = useState(null);
	const [longitude, setLongitude] = useState(null);
	const [loading, setLoading] = useState("idle");
	const [locationError, setLocationError] = useState(null);
	const [isRequested, setIsRequested] = useState(false);

	const requestGeolocation = () => {
		setIsRequested(true);
	};

	useEffect(() => {
		if (isRequested) {
			const handleSuccess = (position) => {
				setLatitude(position.coords.latitude);
				setLongitude(position.coords.longitude);
			};
			const handleError = (error) => {
				switch (error.code) {
					case error.PERMISSION_DENIED:
						setLocationError("User denied the request for Geolocation.");
						break;
					case error.POSITION_UNAVAILABLE:
						setLocationError("Location information is unavailable.");
						break;
					case error.TIMEOUT:
						setLocationError(
							"The request to get user location timed out."
						);
						break;
					case error.UNKNOWN_ERROR:
						setLocationError("An unknown error occurred.");
						break;
					default:
						setLocationError("Something went wrong... Try again");
				}
			};

			setLoading("loading");
			if (!navigator.geolocation) {
				setLoading("idle");
				setLocationError("Geolocation is not supported by your browser");
			} else {
				setIsAvailable(true);
				navigator.geolocation.getCurrentPosition(
					handleSuccess,
					handleError
				);
				setLoading("idle");
			}
		}
		return () => {
			setIsRequested(false);
		};
	}, [isRequested]);

	return {
		isAvailable,
		latitude,
		longitude,
		loading,
		locationError,
		requestGeolocation,
	};
};

export default useGeolocation;
