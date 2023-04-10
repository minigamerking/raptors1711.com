/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 9:10 AM -- October 18th, 2022
 * Project: @frc1711/raptors1711.com
 */

import styles from "./bio-listing.module.scss";
import type { FunctionComponent, ReactElement, ReactNode } from "react";
import type { Bio } from "../data/bio";
import BioBox from "./bio-box";

export type Props = Readonly<{
	allBios: Record<string, Bio[]>,
	year: number,
	imageStartSide?: "left" | "right",
}>;

const BioListing: FunctionComponent<Props> = ({
	allBios,
	year,
	imageStartSide = "left",
}: Props): ReactElement | null => {
	
	const bios: Bio[] | undefined = allBios[year];
	
	if (bios === undefined) return null;
	
	const bioBoxes: ReactNode = bios.map((bio: Bio, i: number): ReactNode => {
		
		let leftRightToggle: boolean = i % 2 !== 0;
		
		if (imageStartSide === "right") leftRightToggle = !leftRightToggle;
		
		return (
			<BioBox bio={bio}
					key={bio.name}
					imageSide={leftRightToggle ? "left" : "right"} />
		);
		
	});
	
	return <>{bioBoxes}</>;
	
};

export default BioListing;
