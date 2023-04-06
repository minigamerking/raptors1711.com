/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 9:19 AM -- October 17th, 2022
 * Project: @frc1711/raptors1711.com
 */

import { ReactElement, ReactNode } from "react";
import type { GetLayoutFunction } from "@formativesolutions/next";
import Header from "./header";
import Footer from "./footer";
import { css, SerializedStyles } from "@emotion/react";
import {
	PAGE_MARGIN_SIDES,
	PAGE_PADDING_FOOTER,
	PAGE_WIDTH
} from "../../styles/sizing";
import { flexContainer } from "../../styles/mixins";

const headerAndMainStyles: SerializedStyles = css({
	...flexContainer({ mainAxis: "start" }),
	minHeight: `calc(100vh - ${PAGE_PADDING_FOOTER})`,
	width: "100%",
});

const mainContainerStyles: SerializedStyles = css({
	flex: 1,
	...flexContainer({ mainAxis: "start" }),
	width: "100%",
	paddingLeft: PAGE_MARGIN_SIDES,
	paddingRight: PAGE_MARGIN_SIDES,
});

const mainStyles: SerializedStyles = css({
	flex: 1,
	...flexContainer({ mainAxis: "start", crossAxis: "stretch" }),
	width: "100%",
	maxWidth: PAGE_WIDTH,
});

const DefaultLayout: GetLayoutFunction = (
	element: ReactElement
): ReactNode => (
	<>
		<div css={headerAndMainStyles}>
			<Header />
			<div css={mainContainerStyles}>
				<main css={mainStyles}>{element}</main>
			</div>
		</div>
		<Footer />
	</>
);

export default DefaultLayout;
