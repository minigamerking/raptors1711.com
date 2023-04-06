/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 9:21 AM -- October 18th, 2022
 * Project: @frc1711/raptors1711.com
 */

import { ReactElement } from "react";
import { Bio } from "../data/bio";
import ContextBox from "./context-box";
import { css, SerializedStyles } from "@emotion/react";

export type Props = Readonly<{
	bio: Bio,
	imageSide?: "left" | "right",
}>;

const bioHeaderStyles: SerializedStyles = css({
	display: "flex",
	alignItems: "baseline",
	justifyContent: "center",
	flexWrap: "wrap",
	marginBottom: "5px",
	"*": {
		padding: "0 5px",
		whiteSpace: "nowrap",
	},
});

const nameStyles: SerializedStyles = css({
	fontSize: "1.6em",
});

const roleStyles: SerializedStyles = css({
	fontSize: "1em",
	opacity: "0.8",
	fontWeight: "400",
});

const descriptionStyles: SerializedStyles = css({
	textAlign: "center",
});

export default function BioBox({ bio, imageSide }: Props): ReactElement {
	
	return (
		<ContextBox imageProportion={0.4}
					imageSrc={bio.image}
					imageAlt={bio.name}
					imageSizes={undefined}
					imageSide={imageSide}
					imageVerticalCenter={bio.imageVerticalCenter}
					imageHorizontalCenter={bio.imageHorizontalCenter}
					centerChildren>
			<div css={bioHeaderStyles}>
				<h4 css={nameStyles}>{bio.name}</h4>
				<h6 css={roleStyles}>{bio.role}</h6>
			</div>
			<p css={descriptionStyles}>{bio.description}</p>
		</ContextBox>
	);
	
}
