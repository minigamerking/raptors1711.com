/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 3:24 PM -- October 18th, 2022
 * Project: v2.raptors1711.com
 */

import { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import BioListing from "../../../components/bio-listing";
import PageTitle from "../../../components/page-title";
import { LEADS } from "../../../data/leads";

const MeetTheLeadsByYearPage: NextPage = () => {
	
	const router: NextRouter = useRouter();
	const { year }: ParsedUrlQuery = router.query;
	
	return (
		<>
			<PageTitle>Meet the Leads</PageTitle>
			<BioListing allBios={LEADS} year={parseInt(year as string)} />
		</>
	);
	
};

export async function getStaticPaths() {
	
	return {
		paths: Object.keys(LEADS).map(
			(year: string) => ({ params: { year }})
		),
		fallback: false,
	};
	
}

export async function getStaticProps() {
	
	return { props: {} };
	
}

export default MeetTheLeadsByYearPage;
