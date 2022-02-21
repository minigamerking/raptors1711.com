import "./about-us.scss";
import aboutUsImg1 from "../../assets/images/about-us-1.jpeg";
import aboutUsImg2 from "../../assets/images/about-us-2.jpeg";
import aboutUsImg3 from "../../assets/images/about-us-3.jpg";
import aboutUsImg4 from "../../assets/images/about-us-4.png";
import React from "react";
import { Page } from "../elements/page-flow/page";
import { PageHeading } from "../elements/page-heading";

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class AboutUs extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
    	
    	return (
			<Page name="about-us">
				<PageHeading>About Us!</PageHeading>
				<div className="left-right-split">
					<div className="text-box">
						<p>
							Team 1711 The RAPTORS was formed in 2007 initially by a teacher and a small group of students eager
							to learn about FIRST Robotics. That teacher, Mr. John Failor, continues to connect us with Traverse
							City Area Public Schools (TCAPS) and works with the team. Meanwhile, our head mentor, Mrs. Jennifer
							DeZeeuw, has been on the team for six years. She organizes our events, keeps them fun, and ensures
							that meetings run smoothly. Our team meets multiple times per week, beginning in the fall and
							accelerating into build. Some of our traditions include team dances and Wednesday night meals
							together.
						</p>
					</div>
					<div className="img-box">
						<img src={aboutUsImg1} />
					</div>
				</div>
				<div className="left-right-split">
					<div className="img-box">
						<img src={aboutUsImg2} />
					</div>
					<div className="text-box">
						<p>
							RAPTORS stands for Robots and People Transmitting Objective Radical Synergy, and our mascot is
							Lawrence, the Raptor.
						</p>
					</div>
				</div>
				<div className="left-right-split">
					<div className="text-box">
						<p>
							Team 1711 is heavily involved in our community, especially through connecting with younger students.
							Our biggest annual event is Super Science Saturday, which encourages elementary school students to
							develop an interest in STEM through hands-on activities and guest speakers. Mrs. DeZeeuw spearheads
							the logistics for this event each year, another example of her countless contributions to the team.
						</p>
					</div>
					<div className="img-box">
						<img src={aboutUsImg3} />
					</div>
				</div>
				<div className="left-right-split">
					<div className="img-box">
						<img src={aboutUsImg4} />
					</div>
					<div className="text-box">
						<p>
							The RAPTORS love to have fun in and out of practice, but we have had many accomplishments throughout
							the years, most recently winning Chairman’s and advancing to States in the 2021 season. We are
							excited to return to the field this year and hope you will follow our progress.
						</p>
					</div>
				</div>
			</Page>
		);
		
	}
    
}
