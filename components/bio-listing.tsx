/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 9:10 AM -- October 18th, 2022
 * Project: @frc1711/raptors1711.com
 */

import { ReactElement, ReactNode } from "react";
import { css, SerializedStyles } from "@emotion/react";
import Image, { StaticImageData } from "next/image";
import { PAGE_WIDTH } from "../styles/sizing";
import { MENTORS } from "../data/mentors";
import { Bio } from "../data/bio";
import BioBox from "./bio-box";
import { is } from "@babel/types";

export type Props = Readonly<{
	allBios: Record<string, Bio[]>,
	year: number,
	imageStartSide?: "left" | "right",
}>;

export default function BioListing({
	allBios, year, imageStartSide
}: Props): ReactElement | null {
	
	imageStartSide = imageStartSide ?? "left";
	
	const bios: Bio[] | undefined = allBios[year];
	
	if (bios === undefined) return null;
	
	const mentorBios: ReactNode = bios.map((bio: Bio, i: number): ReactNode => {
		
		let leftRightToggle: boolean = i % 2 !== 0;
		
		if (imageStartSide === "right") leftRightToggle = !leftRightToggle;
		
		const imageSide: "left" | "right" = leftRightToggle ? "left" : "right";
		
		return <BioBox bio={bio}
				key={bio.name}
				imageSide={imageSide} />
		
	});
	
	return (
		<>{mentorBios}</>
	);
	
}
