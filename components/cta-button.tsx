/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 1:32 PM -- October 27th, 2022
 * Project: @frc1711/raptors1711.com
 */

import styles from "./cta-button.module.scss";
import type { FunctionComponent, MouseEventHandler, ReactElement } from "react";

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

const CTAButton: FunctionComponent<Props> = (
	{ children, ...rest }: Props,
): ReactElement => {
	
	let result: ReactElement = (
		<div className={styles.container}
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
	
};

export default CTAButton;
