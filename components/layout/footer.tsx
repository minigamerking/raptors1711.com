/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 9:19 AM -- October 17th, 2022
 * Project: @frc1711/raptors1711.com
 */

import styles from "./footer.module.scss";
import type { FunctionComponent, ReactElement } from "react";
import FRCLogoHorizontalRule from "../frc-logo-horizontal-rule";
import FooterNavigation from "../footer-navigation";
import SocialMediaCallout from "../social-media-callout";
import { FOOTER_NAVIGATION } from "../../data/navigation";
import { ALL_SOCIAL_MEDIA } from "../../data/social-media";

const Footer: FunctionComponent = (): ReactElement => (
	<div className={styles.footerContainer}>
		<FRCLogoHorizontalRule />
		<footer className={styles.footer}>
			<div className={styles.footerNav}>
				<FooterNavigation navigation={FOOTER_NAVIGATION} />
			</div>
			<SocialMediaCallout socialMedias={ALL_SOCIAL_MEDIA}
								orientation="horizontal" />
		</footer>
	</div>
);

export default Footer;
