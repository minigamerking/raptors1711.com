/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 9:38 AM -- October 17th, 2022
 * Project: @frc1711/raptors1711.com
 */

import styles from "./context-box.module.scss";
import type { FunctionComponent, ReactElement, ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import type { Properties } from "csstype";

export type Props = Readonly<{
	children?: ReactNode,
	imageProportion?: number,
	imageSrc: string | StaticImageData,
	imageAlt: string,
	imageSizes?: string,
	imageSide?: "left" | "right",
	imageVerticalCenter?: number,
	imageHorizontalCenter?: number,
	centerChildren?: boolean,
}>;

function clamp(input: number, minimum: number, maximum: number): number {
	
	if (minimum > maximum) {
		
		throw Error("Cannot clamp value to range [x, y] when x > y.");
		
	} else if (input < minimum) return minimum;
	else if (input > maximum) return maximum;
	else return input;
	
}

const ContextBox: FunctionComponent<Props> = ({
	children,
	imageProportion = 0.6,
	imageSrc,
	imageAlt,
	imageSizes = `(max-width: var(--sizing-page-width) 100vw, ` +
	             `calc(${imageProportion} * var(--sizing-page-width))`,
	imageSide = "left",
	imageVerticalCenter,
	imageHorizontalCenter,
	centerChildren = false,
}: Props): ReactElement => {
	
	const outerContainerClassNames: string[] = [
		styles.outerContainer,
		imageSide === "right" ? styles.right : styles.left,
	];
	
	const imageStyles: Properties = {};
	
	if (imageVerticalCenter !== undefined ||
		imageHorizontalCenter !== undefined) {
		
		if (imageVerticalCenter === undefined) imageVerticalCenter = 0.5;
		else imageVerticalCenter = clamp(imageVerticalCenter, 0, 1);
		
		if (imageHorizontalCenter === undefined) imageHorizontalCenter = 0.5;
		else imageHorizontalCenter = clamp(imageHorizontalCenter, 0, 1);
		
		imageStyles.objectPosition =
			`${imageHorizontalCenter * 100}% ${imageVerticalCenter * 100}%`;
		
	}
	
	let innerTextContainerClassNames: string[] = [styles.innerTextContainer];
	
	if (centerChildren) innerTextContainerClassNames.push(styles.centered);
	
	return (
		<div className={outerContainerClassNames.join(" ")}>
			<div className={styles.textContainer}
				 style={{ flexGrow: 1 - imageProportion }}>
				<div className={innerTextContainerClassNames.join(" ")}>
					{children}
				</div>
			</div>
			<div className={styles.imageContainer}
				 style={{ flexGrow: imageProportion }}>
				<Image src={imageSrc}
					   width={500}
					   height={500}
					   alt={imageAlt}
					   sizes={imageSizes}
					   className={styles.image}
					   style={imageStyles}/>
			</div>
		</div>
	);
	
};

export default ContextBox;
