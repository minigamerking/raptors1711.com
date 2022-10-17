/*
 * Created by Formative Solutions <contact@formativesolutions.io>
 *     (https://formativesolutions.io/).
 * <project_creation_date>
 * Project: <project_name>
 */

import {
	ColorMap,
	createColorToCSSVariableNameMap
} from "@formativesolutions/colors";

/**
 * A union of utilized color names.
 */
export type Color =
	| "BLACK"
	| "WHITE";

/**
 * A mapping from color names to their raw values (using acceptable CSS color
 * values).
 */
export const RAW_COLORS: ColorMap<Color> = {
	BLACK: "#3C3C3C",
	WHITE: "#FFF",
};

/**
 * A mapping from color names to their respective CSS variable names.
 */
export const COLORS: ColorMap<Color> =
	createColorToCSSVariableNameMap(RAW_COLORS);
