import { forwardRef } from "react";
import { Icon } from "./Icon.style";

const UviIcon = forwardRef((props, ref) => (
	<Icon
		ref={ref}
		viewBox="0 0 32 32"
		fillRule="evenodd"
		clipRule="evenodd"
		fill="currentColor"
		{...props}
	>
		<title>UV index</title>
		<path d="M13.8 2.509a2.463 2.463 0 014.4 0l12.539 25.023a2.462 2.462 0 01-2.199 3.563H3.46a2.46 2.46 0 01-2.199-3.563L13.8 2.509zM16 23.78c1.445 0 2.617 1.196 2.617 2.669 0 1.474-1.172 2.67-2.617 2.67s-2.617-1.196-2.617-2.67c0-1.473 1.172-2.669 2.617-2.669zm2.617-14.773c0-.783-1.401-.783-1.834-.783h-1.566c-.433 0-1.834 0-1.834.783l1.05 12.376c0 .433.351.784.784.784h1.566a.784.784 0 00.784-.784l1.05-12.376z"></path>
	</Icon>
));

export default UviIcon;
