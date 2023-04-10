/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 1:15 PM -- April 7th, 2023
 * Project: @frc1711/raptors1711.com
 */

import styles from "./page.module.scss";
import type { ReactElement } from "react";
import type { NextPage } from "next";
import { MENTORS } from "../../../data/mentors";
import Head from "next/head";
import PageTitle from "../../../components/page-title";
import BioListing from "../../../components/bio-listing";

const MeetTheMentors: NextPage = (): ReactElement => {
	
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

export default MeetTheMentors;
