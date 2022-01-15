/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 1:19 PM -- December 4th, 2021
 * Project: raptors1711.com
 */

export type BlogPost = {
	title: string,
	date: string,
	content: string
};

export async function getBlogPosts(): Promise<BlogPost[]> {
	
	return (await fetch("/blog-posts.json")).json();
	
}
