/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 9:19 AM -- October 17th, 2022
 * Project: v2.raptors1711.com
 */

const NEXT_CONFIG = {
	
	reactStrictMode: true,
	
	swcMinify: true,
	
	compiler: {
		
		emotion: true,
		
	},
	
	images: {
		
		formats: [
			"image/avif",
			"image/webp",
		],
		
	},
	
	experimental: {
		
		images: {
			
			allowFutureImage: true,
			
		},
		
	},
	
};

export default NEXT_CONFIG;
