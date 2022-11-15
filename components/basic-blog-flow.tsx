/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 3:16 PM -- October 18th, 2022
 * Project: v2.raptors1711.com
 */


import { ReactElement, ReactNode } from "react";
import { css, SerializedStyles } from "@emotion/react";

export type Props = Readonly<{
	children: ReactNode,
}>;

const containerStyles: SerializedStyles = css({
	
});

export default function BasicBlogFlow({ children }: Props): ReactElement {
	
	if (typeof children === "string") {
		
		children = children.split("\n").map(
			(paragraph: string): ReactNode => <p key={paragraph}>{paragraph}</p>
		);
		
	}
	
	return (
		<div css={containerStyles}>
			{children}
		</div>
	);
	
}
