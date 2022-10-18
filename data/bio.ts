/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 8:56 AM -- October 18th, 2022
 * Project: v2.raptors1711.com
 */

import { StaticImageData } from "next/image";

export type Bio = {
	name: string,
	role: string,
	description: string,
	image: string | StaticImageData,
	imageVerticalCenter?: number,
	imageHorizontalCenter?: number,
}
