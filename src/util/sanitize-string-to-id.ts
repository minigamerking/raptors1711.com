/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 1:42 PM -- March 1st, 2022
 * Project: raptors1711.com
 */

export function sanitizeStringToID(text: string): string {
	
	return text.replace(" ", "-")
	           .toLowerCase()
	           .split("")
	           .filter((character: string): boolean => /^[a-z0-9-]+$/i.test(character))
	           .join("");
	
}
