/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 9:24 AM -- October 20th, 2022
 * Project: @frc1711/raptors1711.com
 */

import { ReactElement } from "react";
import { css, SerializedStyles } from "@emotion/react";

const textStyles: SerializedStyles = css({
	fontSize: "2em",
	lineHeight: "1",
	textShadow: "2px 2px #0008",
});

const lineBreakStyles: SerializedStyles = css({
	fontSize: 0,
});

export default function RaptorRobotics(): ReactElement {
	
	return (
		<h1 css={textStyles}>
			Raptor<br css={lineBreakStyles} />
			Robotics
		</h1>
	);
	
}
