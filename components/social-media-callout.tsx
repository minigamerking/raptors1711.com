/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 4:03 PM -- October 25th, 2022
 * Project: v2.raptors1711.com
 */

import { ReactElement, ReactNode } from "react";
import { css, SerializedStyles } from "@emotion/react";
import { SocialMedia } from "../data/social-media";
import { flexContainer } from "../styles/mixins";

export type Props = Readonly<{
	socialMedias: SocialMedia[],
	orientation: "vertical" | "horizontal",
}>;

const containerStyles: SerializedStyles = css({
	
});

const verticalContainerStyles: SerializedStyles = css({
	...flexContainer({ direction: "column" }),
});

const horizontalContainerStyles: SerializedStyles = css({
	...flexContainer({ direction: "row" }),
});

const iconLinkStyles: SerializedStyles = css({
	...flexContainer({ mainAxis: "center", crossAxis: "center" }),
	padding: "5px",
	transitionProperty: "transform",
	transitionDuration: "250ms",
	msTransitionTimingFunction: "ease-in-out",
	willChange: "transform",
	backfaceVisibility: "hidden",
	transform: "perspective(1px) translateZ(0)",
	"&:hover": {
		transform: "scale(1.2)",
	}
});

export default function SocialMediaCallout({
	socialMedias, orientation
}: Props): ReactElement {
	
	const icons: ReactNode = socialMedias.map(({
		platformName, userName, link, iconComponent
	}: SocialMedia) => (
		<a key={platformName}
		   href={link}
		   css={iconLinkStyles}
		   title={`Find the Raptors (@${userName}) on ${platformName}!`}>
			{iconComponent}
		</a>
	));
	
	const allContainerStyles: SerializedStyles[] = [
		containerStyles,
		orientation === "vertical" ? verticalContainerStyles : horizontalContainerStyles
	];
	
	return (
		<div css={allContainerStyles}>
			{icons}
		</div>
	);
	
}
