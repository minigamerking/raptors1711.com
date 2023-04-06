/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 3:16 PM -- October 18th, 2022
 * Project: @frc1711/raptors1711.com
 */


import { ReactElement } from "react";
import { css, SerializedStyles } from "@emotion/react";

export type Props = Readonly<{
	children: string,
}>;

const textStyles: SerializedStyles = css({
	fontSize: "4em",
	lineHeight: "0.9",
	textShadow: "4px 3px grey",
	textAlign: "center",
	margin: "20px 0",
});

export default function PageTitle({ children }: Props): ReactElement {
	
	return <h1 css={textStyles}>{children}</h1>;
	
}
