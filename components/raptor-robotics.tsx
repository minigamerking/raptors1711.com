/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 9:24 AM -- October 20th, 2022
 * Project: @frc1711/raptors1711.com
 */

import styles from "./raptor-robotics.module.scss";
import type { FunctionComponent, ReactElement } from "react";

const RaptorRobotics: FunctionComponent = (): ReactElement => (
	<h1 className={styles.text}>
		Raptor<br className={styles.lineBreak} />
		Robotics
	</h1>
);

export default RaptorRobotics;
