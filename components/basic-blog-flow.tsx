/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 3:16 PM -- October 18th, 2022
 * Project: @frc1711/raptors1711.com
 */

import styles from "./basic-blog-flow.module.scss";
import type { FunctionComponent, ReactElement, ReactNode } from "react";

export type Props = Readonly<{
	children: ReactNode,
}>;

const BasicBlogFlow: FunctionComponent<Props> = (
	{ children }: Props,
): ReactElement => {
	
	console.log(children);
	
	if (typeof children === "string") {
		
		children = children.split("\n").map(
			(paragraph: string): ReactNode => <p key={paragraph}>{paragraph}</p>
		);
		
	}
	
	return (
		<div className={styles.container}>
			{children}
		</div>
	);
	
};

export default BasicBlogFlow;
