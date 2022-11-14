/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 9:19 AM -- October 17th, 2022
 * Project: v2.raptors1711.com
 */

import {
	ColorMap,
	createColorToCSSVariableNameMap
} from "@formativesolutions/styles";

/**
 * A union of utilized color names.
 */
export type Color =
	| "BLACK"
	| "WHITE"
	| "BLUEGRAY";

/**
 * A mapping from color names to their raw values (using acceptable CSS color
 * values).
 */
export const RAW_COLORS: ColorMap<Color> = {
	BLACK: "#3C3C3C",
	WHITE: "#FFF",
	BLUEGRAY: "#282C34",
};

/**
 * A mapping from color names to their respective CSS variable names.
 */
export const COLORS: ColorMap<Color> =
	createColorToCSSVariableNameMap(RAW_COLORS);
