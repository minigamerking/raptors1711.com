import "./frc-logo-horizontal-rule.scss";
import frcLogo from "../../assets/images/frc-logo.png";
import React from "react";

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class FRCLogoHorizontalRule extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
		
		return (
			<div className="frc-logo-horizontal-rule">
				<hr />
				<img src={frcLogo} alt="FIRST Robotics Logo" />
				<hr />
			</div>
		);
		
	}
    
}
