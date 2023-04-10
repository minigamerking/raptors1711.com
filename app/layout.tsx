/*
 * Created by Formative Solutions <contact@formativesolutions.io>
 *     (https://formativesolutions.io/).
 * 2:08 PM -- April 6th, 2023.
 * Project: @frc1711/raptors1711.com
 */

import "../styles/global.scss";
import styles from "./layout.module.scss";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import Head from "next/head";
import type { NextLayout, NextLayoutProps } from "@formativesolutions/toolkit";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import type { NextGenerateMetadata } from "../util/next-generate-metadata";


const googleFontsHref: string = "https://fonts.googleapis.com/css2?" +
	"family=PT+Sans&display=swap";

const RootLayout: NextLayout = (
	{ children }: NextLayoutProps,
): ReactNode => (
	<html lang="en">
		<Head>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect"
				  href="https://fonts.gstatic.com"
				  crossOrigin="" />
			<link rel="stylesheet" href={googleFontsHref} />
		</Head>
		<body className={styles.body}>
			<div className={styles.headerAndMain}>
				<Header />
				<div className={styles.mainContainer}>
					<main className={styles.main}>{children}</main>
				</div>
			</div>
			<Footer />
		</body>
	</html>
);

export default RootLayout;

const siteTitle: string = "Raptor Robotics";

export const generateMetadata: NextGenerateMetadata =
	async (): Promise<Metadata> => ({
		title: {
			template: `%s | ${siteTitle}`,
			default: siteTitle,
		},
		description: "The official website for FRC team 1711 - The Raptors.",
		openGraph: {
			url: process.env.VERCEL_URL ?? "unknown",
			siteName: siteTitle,
			locale: "en-US",
			type: "website",
		},
	});
