import "./contact-us.scss";
import React from "react";
import { Page } from "../elements/page-flow/page";
import { PageHeading } from "../elements/page-heading";

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class ContactUs extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
    	
    	return (
			<Page name="contact-us">
				<PageHeading>Contact Us!</PageHeading>
			</Page>
		);
		
	}
    
}
