import * as S from "./Footer.style";
import { Icon } from "components/Icon";

const Footer = () => {
	return (
		<S.Footer>
			<S.Text>
				&copy; Created by{" "}
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
					<Icon name="github" size="lg" />
				</S.Link>
			</S.Links>
		</S.Footer>
	);
};

export default Footer;
