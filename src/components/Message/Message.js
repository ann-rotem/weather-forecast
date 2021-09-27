//import { useState } from 'react';
import PropTypes from "prop-types";
import * as S from "./Message.style";

const Message = ({ type, message }) => {
	return (
		<S.MessageWrapper>
			{type === "error" && (
				<>
					<S.Heading>Oh no!</S.Heading>

					<S.Message>{message}</S.Message>
				</>
			)}
		</S.MessageWrapper>
	);
};

Message.propTypes = {
	type: PropTypes.oneOf(["error", "info"]),
	message: PropTypes.object,
};

export default Message;
