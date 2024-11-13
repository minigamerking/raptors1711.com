import "./meet-the-leads-page.scss";
import leadImageAviannahStieve from "../../assets/images/leads/aviannah-stieve.jpeg";
import leadImageMadisonVandenberg from "../../assets/images/leads/madison-vandenberg.jpeg";
import leadImageKaydenMcmillan from "../../assets/images/leads/kayden-mcmillan.jpeg";
import React from "react";
import { Page } from "../elements/page-flow/page";
import { Props, State } from "./home";
import { PageHeading } from "../elements/page-heading";
import { TextImageBox } from "../elements/text-image-box";
import { sanitizeStringToID } from "../../util/sanitize-string-to-id";

type LeadProfile = {
	name: string,
	title: string,
	bio: React.ReactNode,
	image: string
};

export class MeetTheLeadsPage extends React.Component<Props, State> {
	
	public static readonly LEADS: LeadProfile[] = [
		{
			name: "Kayden McMillan",
			title: "Design SME, Driver & Fearless Leader",
			bio: <p>
				This is Grady’s fourth year on the team, and he’s looking forward to the 2022 build season. With
				2020 being cut short and 2021 being virtual, Grady has big goals for the team this year with it
				being his last. On the rare times where Grady isn’t working on the robot, you can usually find him
				trying to break into Sage’s safety prize candy safe.
			</p>,
			image: leadImageKaydenMcmillan
		},
		{
			name: "Aviannah Stieve",
			title: "Communications SME",
			bio: <p>
				This is Aviannah's third year on the team, She is our communications SME and she has a big role in 
				making the impact essay. You can find Aviannah generally in the computer lab, either doing things for
				communications or talking to her peers when she should probably be working. Outside of robotics Aviannah enjoys hanging 
			</p>, 
			image: leadImageAviannahStieve
		},
		{
			name: "Madison Vandenberg",
			title: "Electrical SME",
			bio: <p>
				Ian’s been doing electrical for three years on the team and loves “the holy sparkiness of 120 volt
				AC” (but don’t tell Sage about all the sparks he makes). When he isn’t making sparks, you can find
				Ian in his car, outside the room, waiting for robotics to start.
			</p>,
			image: leadImageMadisonVandenberg
		},
	];
	
	public render(): React.ReactNode {
		
		let leads: React.ReactNode[] = [];
		let reversed: boolean = false;
		
		for (let lead of MeetTheLeadsPage.LEADS) {
			
			leads.push(
				<TextImageBox image={lead.image}
							  imageAlt={lead.name}
							  reverse={reversed = !reversed}
							  className={sanitizeStringToID(lead.name)}>
					<div className="lead-header">
						<h4>{lead.name}</h4>
						<h6>{lead.title}</h6>
					</div>
					{lead.bio}
				</TextImageBox>
			);
			
		}
		
		return (
			<Page name="meet-the-leads">
				<PageHeading>Meet the Leads</PageHeading>
				{leads}
			</Page>
		);
	
	}
	
}
