/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 9:21 AM -- October 18th, 2022
 * Project: @frc1711/raptors1711.com
 */

import { NextPage } from "next";
import BioListing from "../../../components/bio-listing";
import { MENTORS } from "../../../data/mentors";
import PageTitle from "../../../components/page-title";
import Head from "next/head";

const MeetTheMentorsPage: NextPage = () => {
	
	const year: number = Math.max(...Object.keys(MENTORS).map(
		(key: string): number => parseInt(key)
	));
	
	return (
		<>
			<Head>
				<title>Meet the Mentors | Raptor Robotics</title>
				<meta name="description" content="" />
			</Head>
			<PageTitle>Meet the Mentors</PageTitle>
			<BioListing allBios={MENTORS} year={year} />
		</>
	);
	
};

export default MeetTheMentorsPage;
