import "./header.scss";
import React from "react";
import { Link } from "react-router-dom";

export type NavigationLinks = {
	
	[name: string]: string | {
		
		[name: string]: string
		
	};
	
}

export type Props = Readonly<{
	
	links: NavigationLinks
	
}>;

export type State = Readonly<{}>;

export class Header extends React.Component<Props, State> {
	
	public static defaultProps: Props = {
		
		links: Header.getDefaultNavigationLinks()
		
	};
	
	public static getDefaultNavigationLinks(): NavigationLinks {
		
		return {
			"Home": "/home",
			"About Us": "/about-us",
			"Outreach": "/outreach",
			"Photo Gallery": "/photo-gallery",
			"More": "/more"
		};
		
	}
    
    public render(): React.ReactNode {
		
		let navigationContent: React.ReactNode = Object.entries(this.props.links).map(
			(entry: [string, string | { [name: string]: string }]): React.ReactNode => {
				
				let link: string = entry[1] as string;
				let name: string = entry[0];
				
				return (
					<Link to={link} key={name}>{name}</Link>
				);
			}
		);
		
		return (
			<header>
				<div className="header-content">
					<div className="site-title">
						<h1>RAPTOR<br />Robotics</h1>
					</div>
					<nav>
						{ navigationContent }
					</nav>
				</div>
				<hr />
			</header>
		);
		
	}
    
}
