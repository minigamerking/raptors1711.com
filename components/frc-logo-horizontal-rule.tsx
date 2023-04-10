/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 3:16 PM -- October 18th, 2022
 * Project: @frc1711/raptors1711.com
 */

import styles from "./frc-logo-horizontal-rule.module.scss";
import type { FunctionComponent, ReactElement } from "react";
import Image from "next/image";

const FRCLogoHorizontalRule: FunctionComponent = (): ReactElement => (
	<div className={styles.container}>
		<hr className={styles.hr} />
		<Image src="https://raptors1711.nyc3.digitaloceanspaces.com/frc-logo.png"
			   alt="The FIRST Robotics Competition logo."
			   height={30}
			   width={50}
			   className={styles.frcLogo} />
		<hr className={styles.hr} />
	</div>
);

export default FRCLogoHorizontalRule;
