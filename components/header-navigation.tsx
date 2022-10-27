/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 1:09 PM -- October 27th, 2022
 * Project: v2.raptors1711.com
 */


import { ReactElement, ReactNode } from "react";
import { css, SerializedStyles } from "@emotion/react";
import { Navigation } from "../data/navigation";
import Link from "next/link";
import { flexContainer } from "../styles/mixins";
import { PAGE_WIDTH } from "../styles/sizing";

export type Props = Readonly<{
	navigation: Navigation,
}>;

const outerContainerStyles: SerializedStyles = css({
	...flexContainer({
		direction: "column",
		mainAxis: "center",
		crossAxis: "center",
	}),
	width: "100%",
});

const innerContainerStyles: SerializedStyles = css({
	...flexContainer({
		direction: "row",
		mainAxis: "center",
		crossAxis: "center",
	}),
	width: "100%",
	maxWidth: PAGE_WIDTH,
	listStyle: "none",
});

const navItemStyles: SerializedStyles = css({
	padding: "10px 15px",
	fontSize: "1.05em",
});

const navTextStyles: SerializedStyles = css({
	
});

const linkStyles: SerializedStyles = css({
	textDecoration: "none",
});

const nonLinkStyles: SerializedStyles = css({
	
});

export default function HeaderNavigation({
	navigation,
}: Props): ReactElement {
	
	const innerContent: ReactNode = Object.entries(navigation).map(
		([linkTitle, { href, children }]:
			 [string, { href?: string, children?: Navigation }]): ReactNode => {
			
			let linkItemContent: ReactNode[] = [];
			
			if (href !== undefined) {
				
				linkItemContent.push(
					<Link key="nav-item-text" href={href} passHref>
						<a css={[navTextStyles, linkStyles]}>
							{linkTitle}
						</a>
					</Link>
				);
				
			} else {
				linkItemContent.push(
					<p key="nav-item-text"
					   css={[navTextStyles, nonLinkStyles]}>
						{linkTitle}
					</p>
				);
			}
			
			// if (children !== undefined) {
			//	
			// 	linkItemContent.push(
			// 		<FooterNavigation key="nav-item-subnav"
			// 						  navigation={children}
			// 						  level={level as number + 1} />
			// 	);
			//	
			// }
			
			return (
				<li key={linkTitle} css={navItemStyles}>
					{linkItemContent}
				</li>
			);
			
		}
	);
	
	return (
		<div css={outerContainerStyles}>
			<ul css={innerContainerStyles}>
				{innerContent}
			</ul>
		</div>
	);
	
}
