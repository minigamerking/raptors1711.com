/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 3:43 PM -- April 6th, 2023
 * Project: @frc1711/raptors1711.com
 */

import styles from "./page.module.scss";
import type { ReactElement } from "react";
import type { NextPage, Metadata } from "next";
import Image from "next/image";
import { makeMetadata } from "../util/make-metadata";

const Home: NextPage = (): ReactElement => (
	<>
		<Image src="https://raptors1711.nyc3.digitaloceanspaces.com/homepage-banner.jpg"
			   height={636} width={1325}
			   className={styles.bannerImage}
			   alt="The full 2020 Raptor Robotics team visiting Boy City for kickoff." />
	</>
);

export default Home; // hi ;) - ur girlfriend <3

export const metadata: Metadata = makeMetadata({
	title: "Raptor Robotics",
	description: "The official website for FRC team 1711 - The Raptors.",
	openGraph: {
		title: "Home",
	},
});
