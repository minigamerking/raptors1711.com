/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 1:32 PM -- October 27th, 2022
 * Project: v2.raptors1711.com
 */

import { MouseEventHandler, ReactElement } from "react";
import { css, SerializedStyles } from "@emotion/react";
import { flexContainer } from "@formativesolutions/styles";

export type ButtonProps = Readonly<{
	onClick?: MouseEventHandler<HTMLDivElement> | undefined,
}>;

export type LinkProps = Readonly<{
	href?: string,
	useNextLink?: boolean,
	target?: "_blank" | "_parent" | "_self" | "_top",
	noopener?: boolean,
	noreferrer?: boolean,
	nofollow?: boolean,
}>;

export type Props = Readonly<{
	children?: string,
}> & (ButtonProps | LinkProps);

const containerStyles: SerializedStyles = css({
	...flexContainer({ direction: "row", mainAxis: "center", crossAxis: "center" }),
	height: "1.5rem",
	width: "100%",
	margin: "16px 0",
});

export default function CTAButton({
	children, ...rest
}: Props): ReactElement {
	
	let result: ReactElement = (
		<div css={containerStyles}
			 onClick={"onClick" in rest ? rest.onClick : undefined}>
			{children}
		</div>
	);
	
	if ("href" in rest) {
		
		result = (
			<a href={rest.href} target="_blank" rel="noreferrer">
				{result}
			</a>
		);
		
	}
	
	return result;
	
}
