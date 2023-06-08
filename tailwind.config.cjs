/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			'white': '#ffffff',
			'black': '#050505',
			'black-600':'#161616',
			'emerald-300': '#38ef7d',
			'emerald-500': '#11998e',
			'purple-900': '#4f165b',
			'purple-950': '#631baf',
		  },
	},
  safelist: ['dark:!text-white'],
	plugins: [require('@tailwindcss/typography')],
}
