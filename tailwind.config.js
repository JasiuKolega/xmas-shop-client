/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

const constants = {
	red: '#f23c3d',
	green: '#008d64',
	'dark-green': '#006044',
	'coffee-green': '#243832',
	black: '#222222',
	white: '#ffffff',
	'light-gray': '#e8e7e3',
	'light-gray-xl': '#f0efed',
	'dark-gray': '#a49b8f'
}

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		colors: {
			transparent: colors.transparent,
			...constants
		},
		extend: {
			backgroundImage: {
				pattern: "url('/patterns/carousel-pattern.jpg')",
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			}
		}
	},
	plugins: []
}
