/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 9:19 AM -- October 17th, 2022
 * Project: v2.raptors1711.com
 */

import type { NextPage } from 'next';
import Head from "next/head";
import Image from "next/future/image";
import { css, SerializedStyles } from "@emotion/react";

const bannerImageStyles: SerializedStyles = css({
	height: "auto",
	width: "100%",
	borderRadius: "5px",
});

const Home: NextPage = () => (
	<>
		<Head>
			<title>Raptor Robotics | FRC Team 1711</title>
			<meta name="description" content="" />
		</Head>
		<Image src="https://raptors1711.nyc3.digitaloceanspaces.com/homepage-banner.jpg"
			   height={636} width={1325}
			   css={bannerImageStyles} />
	</>
);

export default Home;
