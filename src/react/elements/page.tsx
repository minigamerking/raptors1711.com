/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 8:31 PM -- November 15th, 2021
 * Project: raptors1711.com
 */

import "./page.scss";
import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export type Props = Readonly<{
	name: string,
	preHeader?: React.ReactNode,
	postFooter?: React.ReactNode,
	centered: boolean,
	fullWidthContent: boolean
}>;

export type State = Readonly<{}>;

export class Page extends React.Component<Props, State> {
	
	public static defaultProps: Partial<Props> = {
		centered: true,
		fullWidthContent: false
	}
	
	public render(): React.ReactNode {
		
		let classes: string[] = [
			"page",
			`page-${this.props.name}`
		];
		
		if (this.props.centered) classes.push("centered");
		if (this.props.fullWidthContent) classes.push("full-width");
		
		return (
			<div className={classes.join(" ")}>
				{this.props.preHeader ?? null}
				<Header />
				<main>
					{this.props.children}
				</main>
				<Footer />
				{this.props.postFooter ?? null}
			</div>
		);
		
	}
	
}
