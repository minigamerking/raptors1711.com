/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 12:47 PM -- April 7th, 2023
 * Project: @frc1711/raptors1711.com
 */

import type { Metadata, ResolvingMetadata } from "next";
import type { NextPageProps } from "@formativesolutions/toolkit";

export type NextGenerateMetadata<
	P extends string = string,
	S extends string = string,
> = (
	props: NextPageProps<P, S>,
	parent?: ResolvingMetadata,
) => Promise<Metadata>;
