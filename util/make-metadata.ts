/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 2:06 PM -- April 7th, 2023
 * Project: @frc1711/raptors1711.com
 */

import type { Metadata } from "next";

// DOCME [4/7/23 @ 2:16 PM]
export function makeMetadata(metadata: Metadata): Metadata {
	
	if (metadata?.openGraph?.title === undefined &&
		metadata?.title !== undefined &&
		metadata?.title !== null) {
		
		metadata.openGraph ??= {};
		metadata.openGraph.title = metadata.title;
		
	}
	
	if (metadata?.openGraph?.description === undefined &&
		metadata.description !== undefined &&
		metadata.description !== null) {
		
		metadata.openGraph ??= {};
		metadata.openGraph.description = metadata.description;
		
	}
	
	return metadata;
	
}
