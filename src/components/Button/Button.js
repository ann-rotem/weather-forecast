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
		padding = 3,
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
			padding={padding}
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
	padding: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
	primary: PropTypes.bool,
	secondary: PropTypes.bool,
};

export default Button;
