/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 9:19 AM -- October 17th, 2022
 * Project: v2.raptors1711.com
 */

import { ReactElement, ReactNode } from "react";
import { css, SerializedStyles } from "@emotion/react";
import { flexContainer } from "../../styles/mixins";
import { PAGE_MARGIN_SIDES, PAGE_MARGIN_TOP } from "../../styles/sizing";
import Link from "next/link";

type Navigation = Record<string, {
	href?: string,
	children?: Navigation,
}>;

const navigation: Navigation = {
	"Home": {
		href: "/"
	},
	"Meet the Team": {
		href: "/meet-the-team",
		children: {
			"Meet the Leads": { href: "/meet-the-team/leads" },
			"Meet the Mentors": { href: "/meet-the-team/mentors" },
		}
	},
	"Sponsor/Donate": {
		href: "/sponsorship"
	},
	"Contact Us": {
		href: "/contact-us"
	},
};

const navStyles: SerializedStyles = css({
	...flexContainer({ direction: "row", mainAxis: "center" }),
});

const navItemStyles: SerializedStyles = css({
	padding: "10px",
});

const headerContainerStyles: SerializedStyles = css({
	...flexContainer(),
	width: "100%",
	paddingLeft: PAGE_MARGIN_SIDES,
	paddingRight: PAGE_MARGIN_SIDES,
	paddingBottom: PAGE_MARGIN_TOP,
});

export default function Header(): ReactElement {
	
	const navLinks: ReactNode = Object.entries(navigation).map(
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
			<header>
				<nav css={navStyles}>
					{navLinks}
				</nav>
			</header>
		</div>
	);
	
}
