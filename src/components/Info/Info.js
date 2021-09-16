import * as S from "./Info.style";
import { GithubIcon } from "components/Icon";

const Info = () => {
	return (
		<>
			<S.Text>
				Created by{" "}
				<a
					href="https://annrotem.com"
					aria-label="Link to website"
					target="_blank"
					rel="noreferrer"
				>
					Ann Rotem
				</a>{" "}
				2021
			</S.Text>
			<S.Links>
				<S.Link
					target="_blank"
					aria-label="Github profile link"
					href="https://github.com/ann-rotem"
					rel="noreferrer"
				>
					<GithubIcon size="lg" />
				</S.Link>
			</S.Links>
		</>
	);
};

export default Info;
