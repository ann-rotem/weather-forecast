import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./StyledButton";

const Button = (props) => {
	const {
		type = "button",
		onClick,
		labelText,
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
			aria-label={labelText}
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
	labelText: PropTypes.string,
	size: PropTypes.string,
	padding: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
	primary: PropTypes.bool,
	secondary: PropTypes.bool,
};

export default Button;
