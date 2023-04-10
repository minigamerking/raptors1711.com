/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 3:16 PM -- October 18th, 2022
 * Project: @frc1711/raptors1711.com
 */

import styles from "./page-title.module.scss";
import type { FunctionComponent, ReactElement, ReactNode } from "react";

export type Props = Readonly<{
	children: ReactNode | undefined,
}>;

const PageTitle: FunctionComponent<Props> =
	({ children }: Props): ReactElement =>
		<h1 className={styles.text}>{children}</h1>;

export default PageTitle;
