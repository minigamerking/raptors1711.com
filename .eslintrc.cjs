module.exports = {
	
	extends: [
	
		"next/core-web-vitals",
		
	],
	
	rules: {
		
		"react/no-unknown-property": ["error", {
			ignore: ["css"],
		}],
		
	},
	
};
