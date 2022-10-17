/*
 * Created by Formative Solutions <contact@formativesolutions.io>
 *     (https://formativesolutions.io/).
 * <project_creation_date>
 * Project: <project_name>
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
