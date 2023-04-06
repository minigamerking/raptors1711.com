/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 3:24 PM -- October 18th, 2022
 * Project: @frc1711/raptors1711.com
 */

import { NextPage } from "next";
import BioListing from "../../../components/bio-listing";
import PageTitle from "../../../components/page-title";
import { LEADS } from "../../../data/leads";
import Head from "next/head";

const MeetTheLeadsPage: NextPage = () => {
	
	const year: number = Math.max(...Object.keys(LEADS).map(
		(key: string): number => parseInt(key)
	));
	
	return (
		<>
			<Head>
				<title>Meet the Leads | Raptor Robotics</title>
				<meta name="description" content="" />
			</Head>
			<PageTitle>Meet the Leads</PageTitle>
			<BioListing allBios={LEADS} year={year} />
		</>
	);
	
};

export default MeetTheLeadsPage;
