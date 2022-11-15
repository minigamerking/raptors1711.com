/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 9:19 AM -- October 17th, 2022
 * Project: v2.raptors1711.com
 */

import type { NextPage } from 'next';
import Head from "next/head";
import PageTitle from "../components/page-title";

const Branding: NextPage = () => (
	<>
		<Head>
			<title>Branding | Raptor Robotics</title>
			<meta name="description" content="" />
		</Head>
		<PageTitle>Branding</PageTitle>
		<p>Mid green: #009444</p>
		<p>Orange: #F15B2B</p>
	</>
);

export default Branding;
