/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 1:13 PM -- April 7th, 2023
 * Project: @frc1711/raptors1711.com
 */

import type { NextStaticParams } from "./next-static-params";

// DOCME [4/7/23 @ 1:14 PM]
export type NextGenerateStaticParams<P extends string = string> =
	() => Promise<NextStaticParams<P>>;
