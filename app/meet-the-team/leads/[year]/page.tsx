/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 4:02 PM -- April 6th, 2023
 * Project: @frc1711/raptors1711.com
 */

import styles from "./page.module.scss";
import type { ReactElement } from "react";
import type { Metadata, NextPage } from "next";
import type { NextPageProps } from "@formativesolutions/toolkit";
import PageTitle from "../../../../components/page-title";
import BioListing from "../../../../components/bio-listing";
import { LEADS } from "../../../../data/leads";
import type {
	NextGenerateMetadata
} from "../../../../util/next-generate-metadata";
import type {
	NextGenerateStaticParams
} from "../../../../util/next-generate-static-params";
import type { NextStaticParams } from "../../../../util/next-static-params";
import { makeMetadata } from "../../../../util/make-metadata";

type PathProps = "year";

const MeetTheLeadsByYear: NextPage<NextPageProps<PathProps>> = (
	{ params }: NextPageProps<PathProps>
): ReactElement => (
	<>
		<PageTitle>Meet the {params.year} Leads</PageTitle>
		<BioListing allBios={LEADS} year={parseInt(params.year)} />
	</>
);

export default MeetTheLeadsByYear;

export const dynamicParams = false;

export const generateStaticParams: NextGenerateStaticParams<PathProps> =
	async (): Promise<NextStaticParams<PathProps>> =>
		Object.keys(LEADS).map((year: string) => ({ year }));

export const generateMetadata: NextGenerateMetadata<PathProps> =
	async ({ params }: NextPageProps<PathProps>): Promise<Metadata> =>
		makeMetadata({
			title: `Meet the ${params.year} Leads`,
			// TODO [4/7/23 @ 1:10 PM] Add a page description!
		});
