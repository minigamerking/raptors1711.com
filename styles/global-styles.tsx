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

const COLOR_VARIABLE_DEFINITIONS: Record<string, string> =
	generateColorDefinitionsCSSObject(RAW_COLORS);

const styles: SerializedStyles = css({
	":root": {
		...COLOR_VARIABLE_DEFINITIONS,
		backgroundColor: COLORS.WHITE,
		color: COLORS.BLACK,
	},
	"*": {
		padding: 0,
		margin: 0,
	},
	"html, body": {
		height: "100%",
		width: "100%",
	}
});

const GlobalStyles: ReactFunctionComponent =
	(): ReactElement => <Global styles={styles} />;

export default GlobalStyles;
