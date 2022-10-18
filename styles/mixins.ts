/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 1:23 PM -- October 18th, 2022
 * Project: v2.raptors1711.com
 */

import { CSSObject } from "@emotion/styled";

export type FlexAlignmentOption =
	| "start"
	| "center"
	| "end"
	| "stretch"
	| "space-around"
	| "space-between"
	| "space-evenly";

type FlexContainerAxisDefinitions = {
	mainAxis: FlexAlignmentOption,
	crossAxis: FlexAlignmentOption,
} | {
	bothAxis: FlexAlignmentOption,
};

export type FlexContainerConfiguration = {
	direction: "row" | "row-reverse" | "column" | "column-reverse",
	wrap: boolean,
} & FlexContainerAxisDefinitions;

export function flexContainer(
	config: Partial<FlexContainerConfiguration> = {}
): CSSObject {
	
	let fullConfig: FlexContainerConfiguration = {
		direction: "column",
		mainAxis: "center",
		crossAxis: "center",
		wrap: false,
		...config,
	};
	
	if ("bothAxis" in config &&
		config.bothAxis !== undefined &&
		config.bothAxis !== null) {
		
		fullConfig.mainAxis = fullConfig.crossAxis = config.bothAxis;
		
	}
	
	const valuesToPrepend: FlexAlignmentOption[] = ["start", "end"];
	
	if (valuesToPrepend.includes(fullConfig.mainAxis)) {
		
		fullConfig.mainAxis =
			`flex-${fullConfig.mainAxis}` as FlexAlignmentOption;
		
	}
	
	if (valuesToPrepend.includes(fullConfig.crossAxis)) {
		
		fullConfig.crossAxis =
			`flex-${fullConfig.crossAxis}` as FlexAlignmentOption;
		
	}
	
	return {
		display: "flex",
		flexDirection: fullConfig.direction,
		justifyContent: fullConfig.mainAxis,
		alignItems: fullConfig.crossAxis,
		flexWrap: fullConfig.wrap ? "wrap" : "nowrap",
	};
	
}
