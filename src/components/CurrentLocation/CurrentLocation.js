import * as S from "./CurrentLocation.style";
import { TargetIcon } from "components/Icon";

const CurrentLocation = ({ handleClick }) => {
	return (
		<S.Wrapper>
			<S.CurrentLocation
				type="button"
				onClick={handleClick}
				aria-label="Current location"
			>
				<TargetIcon />
			</S.CurrentLocation>
		</S.Wrapper>
	);
};

export default CurrentLocation;
