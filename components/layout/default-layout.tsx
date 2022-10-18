/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 9:19 AM -- October 17th, 2022
 * Project: v2.raptors1711.com
 */

import { ReactElement, ReactNode } from "react";
import type { GetLayoutFunction } from "@formativesolutions/next";
import Header from "./header";
import Footer from "./footer";

const DefaultLayout: GetLayoutFunction = (
	element: ReactElement
): ReactNode => (
	<div className="page-root">
		<Header />
		<main>{element}</main>
		<Footer />
	</div>
);

export default DefaultLayout;
