import React from "react";
import * as S from "./Footer.style";
import { GithubIcon } from "components/Icon";

const Footer = () => {
	return (
		<S.Footer>
			<S.Text>
				Created by <span>Ann Rotem</span> 2021
			</S.Text>
			<S.Links>
				<S.Link target="_blank" href="https://github.com/ann-rotem">
					<GithubIcon size="lg" />
				</S.Link>
			</S.Links>
		</S.Footer>
	);
};

export default Footer;
