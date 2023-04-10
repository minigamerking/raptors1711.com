/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 3:50 PM -- April 6th, 2023
 * Project: @frc1711/raptors1711.com
 */

import styles from "./page.module.scss";
import type { ReactElement } from "react";
import type { Metadata, NextPage } from "next";
import PageTitle from "../../components/page-title";
import { makeMetadata } from "../../util/make-metadata";

const ContactUs: NextPage = (): ReactElement => (
	<>
		<PageTitle>Contact Us</PageTitle>
	</>
);

export default ContactUs;

export const metadata: Metadata = makeMetadata({
	title: "Contact Us",
	// TODO [4/7/23 @ 2:34 PM] Add a page description!
})
