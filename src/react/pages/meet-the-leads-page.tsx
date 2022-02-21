import "./meet-the-leads-page.scss";
import leadImageGradyLuyt from "../../assets/images/leads/grady-luyt.jpg";
import leadImageSageBrown from "../../assets/images/leads/sage-brown.jpg";
import leadImageMilesLettinga from "../../assets/images/leads/miles-lettinga.jpg";
import leadImageIanElder from "../../assets/images/leads/ian-elder.jpg";
import leadImageGabrielSeaver from "../../assets/images/leads/gabriel-seaver.jpg";
import React from "react";
import { Page } from "../elements/page-flow/page";
import { Props, State } from "./home";
import { PageHeading } from "../elements/page-heading";

type LeadProfile = {
	name: string,
	title: string,
	bio: string,
	image: string
};

export class MeetTheLeadsPage extends React.Component<Props, State> {
	
	public static readonly LEADS: LeadProfile[] = [
		{
			name: "Grady Luyt",
			title: "Tech Captain",
			bio: "This is Grady’s fourth year on the team, and he’s looking forward to the 2022 build season. With " +
				"2020 being cut short and 2021 being virtual, Grady has big goals for the team this year with it " +
				"being his last. On the rare times where Grady isn’t working on the robot, you can usually find him " +
				"trying to break into Sage’s safety prize candy safe.",
			image: leadImageGradyLuyt
		},
		{
			name: "Sage Brown",
			title: "Non Tech and Safety Captain",
			bio: "Sage spent her freshman and sophomore year on the build team and started doing safety her junior " +
				"year. She’s now a senior and is excited to participate with non tech and safety at comps since she " +
				"couldn’t last year. When she’s not at robotics, Sage can be found cross-country skiing or starting " +
				"her AP Lit reductions the night before they’re due.",
			image: leadImageSageBrown
		},
		{
			name: "Miles Lettinga",
			title: "Build Lead and Driver",
			bio: "This is Miles’ second year with the RAPTORS; he previously competed with 4338 in Israel. Miles’ " +
				"favorite part of FIRST is meeting new people and being to learn new things with the team. Miles’ is " +
				"looking forward to this season and has big goals like advancing to worlds. When Miles isn’t " +
				"building a robot, he’s busy with his AP Chemistry and Calculus homework.",
			image: leadImageMilesLettinga
		},
		{
			name: "Ian Elder",
			title: "Electrical Lead",
			bio: "Ian’s been doing electrical for three years on the team and loves “the holy sparkiness of 120 volt " +
				"AC” (but don’t tell Sage about all the sparks he makes). When he isn’t making sparks, you can find " +
				"Ian in his car, outside the room, waiting for robotics to start.",
			image: leadImageIanElder
		},
		{
			name: "Gabriel Seaver",
			title: "Programming Lead",
			bio: "This is Gabriel’s third year sitting in the dark corner on his fancy computer. Last year, Gabriel " +
				"programmed a reusable code library for swerve drive for our robot. When Gabriel is not programming, " +
				"you can find him “crying about AP Lang”.",
			image: leadImageGabrielSeaver
		}
	];
	
	public render(): React.ReactNode {
		
		let leads: React.ReactNode = MeetTheLeadsPage.LEADS.map((lead: LeadProfile): React.ReactNode => {
			
			return (
				<div className="lead-profile">
					<div className="lead-images">
						<img src={lead.image}
							 alt={`${lead.name} - ${lead.title}`} />
					</div>
					<div className="lead-info">
						<h4>{lead.name}</h4>
						<h6>{lead.title}</h6>
						<p>{lead.bio}</p>
					</div>
				</div>
			)
			
		});
		
		return (
			<Page name="meet-the-leads">
				<PageHeading>Meet the Leads</PageHeading>
				{leads}
			</Page>
		);
	
	}
	
}