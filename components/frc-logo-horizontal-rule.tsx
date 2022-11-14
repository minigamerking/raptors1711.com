/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 3:16 PM -- October 18th, 2022
 * Project: v2.raptors1711.com
 */


import { ReactElement } from "react";
import { css, SerializedStyles } from "@emotion/react";
import { flexContainer } from "@formativesolutions/styles";

const containerStyles: SerializedStyles = css({
	...flexContainer({ direction: "row", mainAxis: "center", crossAxis: "center" }),
	height: "1.5rem",
	width: "100%",
});

const hrStyles: SerializedStyles = css({
	flex: "1",
	height: "1px",
	backgroundColor: "grey",
});

const frcLogoStyles: SerializedStyles = css({
	height: "100%",
	margin: "0 0.5rem",
});

export default function FRCLogoHorizontalRule(): ReactElement {
	
	return (
		<div css={containerStyles}>
			<hr css={hrStyles}/>
			<img src="https://raptors1711.nyc3.digitaloceanspaces.com/frc-logo.png"
				 alt=""
				 css={frcLogoStyles} />
			<hr css={hrStyles}/>
		</div>
	);
	
}
