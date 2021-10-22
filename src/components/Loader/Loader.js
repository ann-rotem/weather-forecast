import * as S from "./Loader.style";

const Loader = () => {
	return (
		<S.LoaderWrapper>
			<S.Spinner></S.Spinner>
			<S.LoaderText>Loading</S.LoaderText>
		</S.LoaderWrapper>
	);
};

export default Loader;
