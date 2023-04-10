/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 2:22 PM -- April 7th, 2023
 * Project: @frc1711/raptors1711.com
 */

import styles from "./page.module.scss";
import type { ReactElement } from "react";
import type { NextPage, Metadata } from "next";
import type { NextPageProps } from "@formativesolutions/toolkit";
import PageTitle from "../../../../components/page-title";
import BioListing from "../../../../components/bio-listing";
import { MENTORS } from "../../../../data/mentors";
import type {
	NextGenerateStaticParams
} from "../../../../util/next-generate-static-params";
import { NextStaticParams } from "../../../../util/next-static-params";
import type {
	NextGenerateMetadata
} from "../../../../util/next-generate-metadata";
import { makeMetadata } from "../../../../util/make-metadata";

type PathProps = "year";

const MeetTheMentorsByYear: NextPage<NextPageProps<PathProps>> = (
	{ params }: NextPageProps<PathProps>
): ReactElement => (
	<>
		<PageTitle>Meet the Mentors</PageTitle>
		<BioListing allBios={MENTORS} year={parseInt(params.year)} />
	</>
);

export default MeetTheMentorsByYear;

export const generateStaticParams: NextGenerateStaticParams<PathProps> =
	async (): Promise<NextStaticParams<PathProps>> =>
		Object.keys(MENTORS).map((year: string) => ({ year }));

export const generateMetadata: NextGenerateMetadata<PathProps> =
	async ({ params }: NextPageProps<PathProps>): Promise<Metadata> =>
		makeMetadata({
			title: `Meet the ${params.year} Mentors`,
			// TODO [4/7/23 @ 1:10 PM] Add a page description!
		});
