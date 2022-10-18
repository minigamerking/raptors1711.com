/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 9:38 AM -- October 17th, 2022
 * Project: v2.raptors1711.com
 */

import { ReactElement, ReactNode } from "react";
import { css, SerializedStyles } from "@emotion/react";
import Image, { StaticImageData } from "next/future/image";
import { PAGE_WIDTH } from "../styles/sizing";
import { flexContainer } from "../styles/mixins";

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

const breakpoint: string = "@media(max-width: 700px)";

const outerContainerStyles: SerializedStyles = css({
	display: "flex",
	flexDirection: "row",
	margin: "25px 0",
	backgroundColor: "#FFF1",
	borderRadius: "5px",
	overflow: "hidden",
	[breakpoint]: {
		flexDirection: "column",
	}
});

const textContainerStyles: SerializedStyles = css({
	flex: "2 1",
	...flexContainer({ mainAxis: "stretch" }),
	[breakpoint]: {
		order: "2",
	},
});

const innerTextContainerStyles: SerializedStyles = css({
	flex: "1 1",
	margin: "20px",
	"*": {
		fontFamily: "'PT Sans', sans-serif",
	},
})

const imageContainerStyles: SerializedStyles = css({
	flex: "3 1",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	maxHeight: "50vh",
	aspectRatio: "4/3",
	overflow: "hidden",
	[breakpoint]: {
		order: "1",
	},
});

const imageStyles: SerializedStyles = css({
	height: "100%",
	width: "100%",
	objectFit: "cover",
});

export default function ContextBox({
	children, imageProportion, imageSrc, imageAlt, imageSizes, imageSide,
	imageVerticalCenter, imageHorizontalCenter, centerChildren
}: Props): ReactElement {
	
	imageProportion = imageProportion ?? 0.6;
	
	imageSizes = imageSizes ??
		`(max-width: ${PAGE_WIDTH}) 100vw, ` +
		`${imageProportion * parseInt(PAGE_WIDTH)}px`;
	
	centerChildren = centerChildren ?? false;
	
	const allOuterContainerStyles: SerializedStyles[] = [outerContainerStyles];
	
	if (imageSide === "right") {
		
		allOuterContainerStyles.push(css({
			flexDirection: "row-reverse",
		}));
		
	}
	
	const allImageStyles: SerializedStyles[] = [imageStyles];
	
	if (imageVerticalCenter !== undefined ||
		imageHorizontalCenter !== undefined) {
		
		if (imageVerticalCenter === undefined) imageVerticalCenter = 0.5;
		else if (imageVerticalCenter > 1) imageVerticalCenter = 1;
		
		if (imageHorizontalCenter === undefined) imageHorizontalCenter = 0.5;
		else if (imageHorizontalCenter > 1) imageHorizontalCenter = 1;
		
		allImageStyles.push(css({
			objectPosition: `${imageHorizontalCenter * 100}% ${imageVerticalCenter * 100}%`
		}));
		
	}
	
	const allTextContainerStyles: SerializedStyles[] = [
		textContainerStyles,
		css({
			flexGrow: 1 - imageProportion,
		})
	];
	
	const allImageContainerStyles: SerializedStyles[] = [
		imageContainerStyles,
		css({
			flexGrow: imageProportion,
		})
	];
	
	const allInnerTextContainerStyles: SerializedStyles[] = [
		innerTextContainerStyles
	];
	
	if (centerChildren) {
		
		allInnerTextContainerStyles.push(css({
			...flexContainer({ mainAxis: "center" }),
		}));
		
	}
	
	return (
		<div css={allOuterContainerStyles}>
			<div css={allTextContainerStyles}>
				<div css={allInnerTextContainerStyles}>
					{children}
				</div>
			</div>
			<div css={allImageContainerStyles}>
				<Image src={imageSrc}
					   width={500}
					   height={500}
					   alt={imageAlt}
					   sizes={imageSizes}
					   css={allImageStyles} />
			</div>
		</div>
	);
	
}
