/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 3:56 PM -- October 25th, 2022
 * Project: @frc1711/raptors1711.com
 */

import type { ReactNode } from "react";
import InstagramIcon from "../assets/icons/instagram.svg";
import FacebookIcon from "../assets/icons/facebook.svg";
import TwitterIcon from "../assets/icons/twitter.svg";
import SnapchatIcon from "../assets/icons/snapchat.svg";
import GitHubIcon from "../assets/icons/github.svg";

export type SocialMedia = {
	platformName: string,
	userName: string,
	link: string,
	iconComponent: ReactNode,
};

export const INSTAGRAM: SocialMedia = {
	platformName: "Instagram",
	userName: "raptors1711",
	link: "https://instagram.com/raptors1711",
	iconComponent: <InstagramIcon />,
};

export const FACEBOOK: SocialMedia = {
	platformName: "Facebook",
	userName: "raptors1711",
	link: "https://facebook.com/raptors1711",
	iconComponent: <FacebookIcon />,
};

export const TWITTER: SocialMedia = {
	platformName: "Twitter",
	userName: "Team1711Raptors",
	link: "https://twitter.com/Team1711Raptors",
	iconComponent: <TwitterIcon />,
};

export const SNAPCHAT: SocialMedia = {
	platformName: "Snapchat",
	userName: "raptors_1711",
	link: "https://www.snapchat.com/add/raptors_1711",
	iconComponent: <SnapchatIcon />,
};

export const GITHUB: SocialMedia = {
	platformName: "GitHub",
	userName: "frc1711",
	link: "https://github.com/frc1711",
	iconComponent: <GitHubIcon />,
};

export const ALL_SOCIAL_MEDIA: SocialMedia[] = [
	INSTAGRAM,
	FACEBOOK,
	TWITTER,
	SNAPCHAT,
	GITHUB,
];
