/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 9:19 AM -- October 17th, 2022
 * Project: @frc1711/raptors1711.com
 */

const NEXT_CONFIG = {
	
	reactStrictMode: true,
	
	swcMinify: true,
	
	images: {
		
		domains: [
			"raptors1711.nyc3.digitaloceanspaces.com",
		],
		
		formats: [
			"image/avif",
			"image/webp",
		],
		
	},
	
	webpack(config) {
		
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});
		
		return config;
		
	},
	
	experimental: {
		
		appDir: true,
		
	},
	
};

export default NEXT_CONFIG;
