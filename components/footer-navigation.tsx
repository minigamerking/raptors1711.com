/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 11:41 AM -- October 25th, 2022
 * Project: @frc1711/raptors1711.com
 */

import styles from "./footer-navigation.module.scss";
import type { FunctionComponent, ReactElement, ReactNode } from "react";
import Link from "next/link";
import type { Navigation } from "../data/navigation";
import type { RecordEntry } from "../util/record-entry";

export type Props = Readonly<{
	navigation: Navigation,
	level?: number,
}>;

const FooterNavigation: FunctionComponent<Props> = (
	{ navigation, level = 0 }: Props,
): ReactElement => {
	
	const innerContent: ReactNode = Object.entries(navigation).map(
		([text, { href, children }]: RecordEntry<Navigation>): ReactNode => {
			
			let linkItemContent: ReactNode[] = [];
			
			if (href !== undefined) {
				
				linkItemContent.push(
					<Link key="nav-item-text"
						  href={href}
						  className={[styles.navText, styles.link].join(" ")}>
						{text}
					</Link>
				);
				
			} else {
				linkItemContent.push(
					<p key="nav-item-text"
					   className={[styles.navText, styles.nonLink].join(" ")}>
						{text}
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
				<li key={text} className={styles.navItem}>
					{linkItemContent}
				</li>
			);
			
		}
	);
	
	const containerClassNames: string[] = [
		styles.container,
		level <= 0 ? styles.outerContainer : styles.innerContainer,
	];
	
	return (
		<ul className={containerClassNames.join(" ")}>
			{innerContent}
		</ul>
	);
	
};

export default FooterNavigation;
