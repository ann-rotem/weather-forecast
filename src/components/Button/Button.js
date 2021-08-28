import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./StyledButton";

const Button = (props) => {
	const {
		type = "button",
		onClick,
		disabled = false,
		children,
		size = "md",
		primary,
		secondary = false,
	} = props;

	return (
		<StyledButton
			type={type}
			onClick={onClick}
			disabled={disabled}
			primary={primary}
			secondary={secondary}
			size={size}
		>
			{children}
			{/* {icon && <Icon name={icon} size={size} />} */}
		</StyledButton>
	);
};

Button.prototypes = {
	type: PropTypes.oneOf(["submit", "button", "icon"]),
	children: PropTypes.node.isRequired,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
	size: PropTypes.string,
	primary: PropTypes.bool,
	secondary: PropTypes.bool,
};

export default Button;
