/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 9:19 AM -- October 17th, 2022
 * Project: v2.raptors1711.com
 */

import { ReactElement, ReactNode } from "react";
import { css, SerializedStyles } from "@emotion/react";
import { flexContainer } from "../../styles/mixins";
import {
	PAGE_MARGIN_SIDES,
	PAGE_MARGIN_TOP,
	PAGE_PADDING_HEADER, PAGE_WIDTH
} from "../../styles/sizing";
import Link from "next/link";
import RaptorRobotics from "../raptor-robotics";
import { HEADER_NAVIGATION, Navigation } from "../../data/navigation";

const headerContainerStyles: SerializedStyles = css({
	...flexContainer(),
	width: "100%",
	paddingTop: PAGE_MARGIN_TOP,
	paddingLeft: PAGE_MARGIN_SIDES,
	paddingRight: PAGE_MARGIN_SIDES,
	paddingBottom: PAGE_PADDING_HEADER,
});

const headerStyles: SerializedStyles = css({
	...flexContainer({ direction: "row", mainAxis: "center" }),
	maxWidth: PAGE_WIDTH,
	width: "100%",
});

const flexBalloonStyles: SerializedStyles = css({
	flex: 1,
})

const navStyles: SerializedStyles = css({
	...flexContainer({ direction: "row", mainAxis: "center" }),
});

const navItemStyles: SerializedStyles = css({
	fontSize: "1.05em",
	padding: "10px 15px",
	textDecoration: "none",
});

export default function Header(): ReactElement {
	
	const navLinks: ReactNode = Object.entries(HEADER_NAVIGATION).map(
		([linkTitle, { href }]: [string, { href?: string, children?: Navigation }]): ReactNode => (
			<Link href={href as string}
				  title={linkTitle}
				  key={linkTitle}
				  passHref>
				<a css={navItemStyles}>{linkTitle}</a>
			</Link>
		)
	);
	
	return (
		<div css={headerContainerStyles}>
			<header css={headerStyles}>
				<RaptorRobotics />
				<div css={flexBalloonStyles} />
				<nav css={navStyles}>
					{navLinks}
				</nav>
			</header>
		</div>
	);
	
}
