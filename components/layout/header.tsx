/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 9:19 AM -- October 17th, 2022
 * Project: v2.raptors1711.com
 */

import { ReactElement } from "react";
import { css, SerializedStyles } from "@emotion/react";
import { flexContainer } from "@formativesolutions/styles";
import {
	PAGE_MARGIN_SIDES,
	PAGE_MARGIN_TOP,
	PAGE_PADDING_HEADER, PAGE_WIDTH
} from "../../styles/sizing";
import RaptorRobotics from "../raptor-robotics";
import { HEADER_NAVIGATION } from "../../data/navigation";
import HeaderNavigation from "../header-navigation";

const headerContainerStyles: SerializedStyles = css({
	...flexContainer(),
	width: "100%",
	paddingTop: PAGE_MARGIN_TOP,
	paddingLeft: PAGE_MARGIN_SIDES,
	paddingRight: PAGE_MARGIN_SIDES,
	paddingBottom: PAGE_PADDING_HEADER,
});

const headerStyles: SerializedStyles = css({
	...flexContainer({
		direction: "column",
		mainAxis: "center",
		crossAxis: "stretch",
	}),
	maxWidth: PAGE_WIDTH,
	width: "100%",
});

const preHeaderContainerStyles: SerializedStyles = css({
	
});

export default function Header(): ReactElement {
	
	return (
		<div css={headerContainerStyles}>
			<header css={headerStyles}>
				<div css={preHeaderContainerStyles}>
					<RaptorRobotics />
				</div>
				<HeaderNavigation navigation={HEADER_NAVIGATION} />
			</header>
		</div>
	);
	
}
