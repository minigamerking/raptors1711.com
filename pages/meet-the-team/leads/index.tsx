/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 3:24 PM -- October 18th, 2022
 * Project: v2.raptors1711.com
 */

import { NextPage } from "next";
import BioListing from "../../../components/bio-listing";
import { MENTORS } from "../../../data/mentors";
import PageTitle from "../../../components/page-title";
import { LEADS } from "../../../data/leads";

const MeetTheLeadsPage: NextPage = () => {
	
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

export default MeetTheLeadsPage;
