import { forwardRef } from "react";
import { Icon } from "./Icon.style";

const LocationIcon = forwardRef((props, ref) => (
	<Icon
		ref={ref}
		viewBox="0 0 32 32"
		fillRule="evenodd"
		fill="currentColor"
		{...props}
	>
		<title>Location</title>
		<path d="M7.732,14.549c-0.447,-1.224 -1.185,-3.145 -1.189,-4.545c-0.016,-5.172 4.232,-9.374 9.452,-9.377c5.219,-0.003 9.459,4.194 9.462,9.366c0.001,1.68 -0.61,3.039 -1.227,4.622l-7.347,16.173c-0.163,0.356 -0.518,0.585 -0.91,0.585c-0.392,-0.001 -0.748,-0.23 -0.909,-0.587l-7.332,-16.237Zm8.275,-12.477c4.257,0.004 7.709,3.464 7.705,7.72c-0.004,4.257 -3.463,7.709 -7.72,7.705c-4.256,-0.004 -7.709,-3.463 -7.704,-7.72c0.004,-4.256 3.463,-7.709 7.719,-7.705Z" />
	</Icon>
));

export default LocationIcon;
