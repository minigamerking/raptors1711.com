/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 9:19 AM -- October 17th, 2022
 * Project: v2.raptors1711.com
 */

import {
	FunctionComponent as ReactFunctionComponent,
	ReactElement
} from "react";
import { Global, css, SerializedStyles } from "@emotion/react";
import { generateColorDefinitionsCSSObject } from "@formativesolutions/colors";
import { COLORS, RAW_COLORS } from "./colors";
import { flexContainer } from "./mixins";

const COLOR_VARIABLE_DEFINITIONS: Record<string, string> =
	generateColorDefinitionsCSSObject(RAW_COLORS);

const styles: SerializedStyles = css({
	":root": {
		...COLOR_VARIABLE_DEFINITIONS,
		backgroundColor: COLORS.BLUEGRAY,
		color: COLORS.WHITE,
		fontSize: "16px",
	},
	"*": {
		padding: 0,
		margin: 0,
		border: "none",
		boxSizing: "border-box",
		fontFamily: "'PT Sans', sans-serif",
		lineHeight: "1.6",
	},
	"html, body": {
		height: "100%",
		width: "100%",
	},
	"#__next": {
		...flexContainer({ mainAxis: "start" }),
	},
	"h1, h2, h3, h4, h5, h6": {
		fontFamily: "'Spy Agency', sans-serif",
	},
	"a": {
		color: "inherit",
	}
});

const GlobalStyles: ReactFunctionComponent =
	(): ReactElement => <Global styles={styles} />;

export default GlobalStyles;
