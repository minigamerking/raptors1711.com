/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 11:41 AM -- October 25th, 2022
 * Project: @frc1711/raptors1711.com
 */


import { ReactElement, ReactNode } from "react";
import { css, SerializedStyles } from "@emotion/react";
import { Navigation } from "../data/navigation";
import Link from "next/link";
import { flexContainer } from "../styles/mixins";

export type Props = Readonly<{
	navigation: Navigation,
	level?: number,
}>;

const containerStyles: SerializedStyles = css({
	listStyle: "none",
});

const outerContainerStyles: SerializedStyles = css({
	...flexContainer({ direction: "row", crossAxis: "start" }),
	margin: "-10px -30px",
	"& > li": {
		margin: "10px 30px",
	}
});

const innerContainerStyles: SerializedStyles = css({
	marginLeft: "14px",
});

const navItemStyles: SerializedStyles = css({
	
});

const navTextStyles: SerializedStyles = css({
	
});

const linkStyles: SerializedStyles = css({
	textDecoration: "none",
});

const nonLinkStyles: SerializedStyles = css({
	
});

export default function FooterNavigation({
	navigation, level
}: Props): ReactElement {
	
	level = level ?? 0;
	
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
			
			if (children !== undefined) {
				
				linkItemContent.push(
					<FooterNavigation key="nav-item-subnav"
									  navigation={children}
									  level={level as number + 1} />
				);
				
			}
			
			return (
				<li key={linkTitle} css={navItemStyles}>
					{linkItemContent}
				</li>
			);
			
		}
	);
	
	const allContainerStyles: SerializedStyles[] = [
		containerStyles,
		level <= 0 ? outerContainerStyles : innerContainerStyles
	];
	
	return (
		<ul css={allContainerStyles}>
			{innerContent}
		</ul>
	);
	
}
