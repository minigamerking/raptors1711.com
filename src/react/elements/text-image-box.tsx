import "./text-image-box.scss";
import React, { ReactNode } from "react";

export type Props = {
    image: string,
	imageAlt: string
	reverse?: boolean
};

type State = {};

export class TextImageBox extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
    	
    	let content: ReactNode;
    	
    	if (typeof this.props.children === "string") content = <p>{this.props.children}</p>;
    	else content = this.props.children;
    	
    	let classes: string[] = ["text-image-box"];
    	
    	if (this.props.reverse) classes.push("reverse");
		
		return (
			<div className={classes.join(" ")}>
				<div className="text-box">
					{content}
				</div>
				<div className="image-box">
					<img src={this.props.image} alt={this.props.imageAlt} />
				</div>
			</div>
		);
		
	}
    
}
