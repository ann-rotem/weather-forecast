import * as S from "./CurrentLocation.style";
import { Icon } from "components/Icon";

const CurrentLocation = ({ handleClick }) => {
	return (
		<S.Wrapper>
			<S.CurrentLocation
				type="button"
				onClick={handleClick}
				aria-label="Current location"
			>
				<Icon name="target" />
			</S.CurrentLocation>
		</S.Wrapper>
	);
};

export default CurrentLocation;
