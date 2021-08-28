import React from "react";
import * as S from "./Tabs.style";

const Tabs = () => {
	return (
		<S.Tabs>
			<S.TabList>
				<S.Tab>Now</S.Tab>
				<S.Tab>Hourly</S.Tab>
				<S.Tab>Daily</S.Tab>
			</S.TabList>
			<S.TabContent>content goes here</S.TabContent>
		</S.Tabs>
	);
};

export default Tabs;
