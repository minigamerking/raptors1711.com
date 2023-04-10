/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 4:03 PM -- October 25th, 2022
 * Project: @frc1711/raptors1711.com
 */

import styles from "./social-media-callout.module.scss";
import type { FunctionComponent, ReactElement, ReactNode } from "react";
import type { SocialMedia } from "../data/social-media";

export type Props = Readonly<{
	socialMedias: SocialMedia[],
	orientation: "vertical" | "horizontal",
}>;

const SocialMediaCallout: FunctionComponent<Props> = (
	{ socialMedias, orientation }: Props,
): ReactElement => {
	
	const icons: ReactNode = socialMedias.map(({
		platformName, userName, link, iconComponent
	}: SocialMedia) => (
		<a key={platformName}
		   href={link}
		   className={styles.iconLink}
		   title={`Find the Raptors (@${userName}) on ${platformName}!`}>
			{iconComponent}
		</a>
	));
	
	const containerClassNames: string[] = [
		styles.container,
		orientation === "vertical" ? styles.vertical : styles.horizontal,
	];
	
	return (
		<div className={containerClassNames.join(" ")}>
			{icons}
		</div>
	);
	
};

export default SocialMediaCallout;
