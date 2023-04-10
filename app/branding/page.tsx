/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 3:49 PM -- April 6th, 2023
 * Project: @frc1711/raptors1711.com
 */

import styles from "./page.module.scss";
import type { ReactElement } from "react";
import type { Metadata, NextPage } from "next";
import PageTitle from "../../components/page-title";
import { makeMetadata } from "../../util/make-metadata";

const Branding: NextPage = (): ReactElement => (
	<>
		<PageTitle>Branding</PageTitle>
		<p>Mid green: #009444</p>
		<p>Orange: #F15B2B</p>
	</>
);

export default Branding;

export const metadata: Metadata = makeMetadata({
	title: "Branding",
	// TODO [4/7/23 @ 2:34 PM] Add a page description!
})
