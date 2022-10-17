/*
 * Created by Formative Solutions <contact@formativesolutions.io>
 *     (https://formativesolutions.io/).
 * <project_creation_date>
 * Project: <project_name>
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
