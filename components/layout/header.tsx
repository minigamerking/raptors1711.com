/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 9:19 AM -- October 17th, 2022
 * Project: @frc1711/raptors1711.com
 */

import styles from "./header.module.scss";
import type { FunctionComponent, ReactElement } from "react";
import RaptorRobotics from "../raptor-robotics";
import HeaderNavigation from "../header-navigation";
import { HEADER_NAVIGATION } from "../../data/navigation";

const Header: FunctionComponent = (): ReactElement => (
	<div className={styles.headerContainer}>
		<header className={styles.header}>
			<div className={styles.preHeaderContainer}>
				<RaptorRobotics />
			</div>
			<HeaderNavigation navigation={HEADER_NAVIGATION} />
		</header>
	</div>
);

export default Header;
