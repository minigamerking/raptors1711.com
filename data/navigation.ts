/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 8:25 AM -- October 24th, 2022
 * Project: @frc1711/raptors1711.com
 */

export type NavigationItem = {
	href?: string,
};

export type Navigation = Record<string, NavigationItem & {
	children?: Record<string, NavigationItem & {
		children?: Record<string, NavigationItem>,
	}>,
}>;

export const HEADER_NAVIGATION = {
	"Home": {
		href: "/",
	},
	"Meet the Team": {
		href: "/meet-the-team",
		children: {
			"Meet the Leads": {
				href: "/meet-the-team/leads",
				children: {
					"2022": { href: "/meet-the-team/leads/2022" },
				},
			},
			"Meet the Mentors": {
				href: "/meet-the-team/mentors",
				children: {
					"2022": { href: "/meet-the-team/mentors/2022" },
					"2023": { href: "/meet-the-team/mentors/2023" },
				},
			},
		},
	},
	"Sponsor/Donate": {
		href: "/sponsorship",
	},
	"Contact Us": {
		href: "/contact-us",
	},
};

export const FOOTER_NAVIGATION = {
	"Home": {
		href: "/"
	},
	"Meet the Team": {
		href: "/meet-the-team",
		children: {
			"Meet the Leads": { href: "/meet-the-team/leads" },
			"Meet the Mentors": { href: "/meet-the-team/mentors" },
		}
	},
	"Sponsor/Donate": {
		href: "/sponsorship"
	},
	"Contact Us": {
		href: "/contact-us"
	},
};
