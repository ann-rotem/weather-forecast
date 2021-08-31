import React from "react";
import * as S from "./ErrorMessage.style";

const ErrorMessage = ({ error }) => {
	return (
		<S.ErrorMessageWrapper>
			<S.Heading>Oops!</S.Heading>

			<S.ErrorText>
				Error {error.cod}: {error.message}
			</S.ErrorText>
			<S.Message>Something went wrong.</S.Message>
			<S.Message>Please try again</S.Message>
		</S.ErrorMessageWrapper>
	);
};

export default ErrorMessage;
