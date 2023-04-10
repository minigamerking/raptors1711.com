/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 3:52 PM -- April 6th, 2023
 * Project: @frc1711/raptors1711.com
 */

import styles from "./page.module.scss";
import type { ReactElement } from "react";
import type { NextPage, Metadata } from "next";
import { LEADS } from "../../../data/leads";
import PageTitle from "../../../components/page-title";
import BioListing from "../../../components/bio-listing";
import { makeMetadata } from "../../../util/make-metadata";

const MeetTheLeads: NextPage = (): ReactElement => {
	
	const year: number = Math.max(...Object.keys(LEADS).map(
		(key: string): number => parseInt(key)
	));
	
	return (
		<>
			<PageTitle>Meet the Leads</PageTitle>
			<BioListing allBios={LEADS} year={year} />
		</>
	);
	
};

export default MeetTheLeads;

export const metadata: Metadata = makeMetadata({
	title: "Meet the Leads",
	// TODO [4/7/23 @ 12:56 PM] Add a page description.
});
