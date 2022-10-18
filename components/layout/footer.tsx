/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 9:19 AM -- October 17th, 2022
 * Project: v2.raptors1711.com
 */

import { ReactElement } from "react";
import { css, SerializedStyles } from "@emotion/react";
import { flexContainer } from "../../styles/mixins";
import { PAGE_MARGIN_BOTTOM, PAGE_MARGIN_SIDES } from "../../styles/sizing";

const footerContainerStyles: SerializedStyles = css({
	...flexContainer(),
	width: "100%",
	paddingLeft: PAGE_MARGIN_SIDES,
	paddingRight: PAGE_MARGIN_SIDES,
	paddingBottom: PAGE_MARGIN_BOTTOM,
});

export default function Footer(): ReactElement {
	
	return (
		<div css={footerContainerStyles}>
			<footer />
		</div>
	);
	
}
