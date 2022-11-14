/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 9:19 AM -- October 17th, 2022
 * Project: v2.raptors1711.com
 */

import { ReactElement } from "react";
import { css, SerializedStyles } from "@emotion/react";
import { flexContainer } from "@formativesolutions/styles";
import {
	PAGE_MARGIN_BOTTOM,
	PAGE_MARGIN_SIDES, PAGE_PADDING_FOOTER,
	PAGE_WIDTH
} from "../../styles/sizing";
import FRCLogoHorizontalRule from "../frc-logo-horizontal-rule";
import { FOOTER_NAVIGATION } from "../../data/navigation";
import FooterNavigation from "../footer-navigation";
import SocialMediaCallout from "../social-media-callout";
import { ALL_SOCIAL_MEDIA } from "../../data/social-media";

const footerContainerStyles: SerializedStyles = css({
	...flexContainer({ crossAxis: "center" }),
	width: "100%",
	paddingTop: PAGE_PADDING_FOOTER,
	paddingLeft: PAGE_MARGIN_SIDES,
	paddingRight: PAGE_MARGIN_SIDES,
	paddingBottom: PAGE_MARGIN_BOTTOM,
});

const footerStyles: SerializedStyles = css({
	...flexContainer(),
	maxWidth: PAGE_WIDTH,
	width: "100%",
	marginTop: "16px",
});

const footerNavContainer: SerializedStyles = css({
	width: "100%",
	maxWidth: "800px",
});

export default function Footer(): ReactElement {
	
	return (
		<div css={footerContainerStyles}>
			<FRCLogoHorizontalRule />
			<footer css={footerStyles}>
				<div css={footerNavContainer}>
					<FooterNavigation navigation={FOOTER_NAVIGATION} />
				</div>
				<SocialMediaCallout socialMedias={ALL_SOCIAL_MEDIA}
									orientation="horizontal" />
			</footer>
		</div>
	);
	
}
