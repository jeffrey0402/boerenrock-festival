/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				"hero-pattern": "url('/headerboerenrock.png')",
				"grass-svg": "url('/grassborder.svg')",
			}
		},
	},
	plugins: [],
}
