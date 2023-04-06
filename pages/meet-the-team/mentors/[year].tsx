/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 3:16 PM -- October 18th, 2022
 * Project: @frc1711/raptors1711.com
 */

import { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import BioListing from "../../../components/bio-listing";
import { MENTORS } from "../../../data/mentors";
import PageTitle from "../../../components/page-title";
import Head from "next/head";

const MeetTheMentorsByYearPage: NextPage = () => {
	
	const router: NextRouter = useRouter();
	const { year }: ParsedUrlQuery = router.query;
	
	return (
		<>
			<Head>
				<title>Meet the {year} Mentors | Raptor Robotics</title>
				<meta name="description" content="" />
			</Head>
			<PageTitle>Meet the Mentors</PageTitle>
			<BioListing allBios={MENTORS} year={parseInt(year as string)} />
		</>
	);
	
};

export async function getStaticPaths() {
	
	return {
		paths: Object.keys(MENTORS).map(
			(year: string) => ({ params: { year }})
		),
		fallback: false,
	};
	
}

export async function getStaticProps() {
	
	return { props: {} };
	
}

export default MeetTheMentorsByYearPage;
