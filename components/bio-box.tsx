/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 9:21 AM -- October 18th, 2022
 * Project: @frc1711/raptors1711.com
 */

import styles from "./bio-box.module.scss";
import type { FunctionComponent, ReactElement } from "react";
import type { Bio } from "../data/bio";
import ContextBox from "./context-box";

export type Props = Readonly<{
	bio: Bio,
	imageSide?: "left" | "right",
}>;

const BioBox: FunctionComponent<Props> =
	({ bio, imageSide }: Props): ReactElement => (
	<ContextBox imageProportion={0.4}
				imageSrc={bio.image}
				imageAlt={bio.name}
				imageSizes={undefined}
				imageSide={imageSide}
				imageVerticalCenter={bio.imageVerticalCenter}
				imageHorizontalCenter={bio.imageHorizontalCenter}
				centerChildren>
		<div className={styles.header}>
			<h4 className={styles.name}>{bio.name}</h4>
			<h6 className={styles.role}>{bio.role}</h6>
		</div>
		<p className={styles.description}>{bio.description}</p>
	</ContextBox>
);

export default BioBox;
