/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./src/containers/**/*.{js,ts,jsx,tsx}",
		"./src/app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			"xs": "568px",
		},
		extend: {
			colors: {
				primary: {"50":"#eef2ff","100":"#e0e7ff","200":"#c7d2fe","300":"#a5b4fc","400":"#818cf8","500":"#6366f1","600":"#4f46e5","700":"#4338ca","800":"#3730a3","900":"#312e81"}
			},
			fontFamily: {
				"body": [
					"Inter", 
					"ui-sans-serif", 
					"system-ui", 
					"-apple-system", 
					"system-ui", 
					"Segoe UI", 
					"Roboto", 
					"Helvetica Neue", 
					"Arial", 
					"Noto Sans", 
					"sans-serif", 
					"Apple Color Emoji", 
					"Segoe UI Emoji", 
					"Segoe UI Symbol", 
					"Noto Color Emoji"
				],
				"sans": [
					"Inter", 
					"ui-sans-serif", 
					"system-ui", 
					"-apple-system", 
					"system-ui", 
					"Segoe UI", 
					"Roboto", 
					"Helvetica Neue", 
					"Arial", 
					"Noto Sans", 
					"sans-serif", 
					"Apple Color Emoji", 
					"Segoe UI Emoji", 
					"Segoe UI Symbol", 
					"Noto Color Emoji"
				]
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			animation: {
				border: "background ease infinite",
			},
			keyframes: {
				background: {
					"0%, 100%": { backgroundPosition: "0% 50%" },
					"50%": { backgroundPosition: "100% 50%" },
				},
			},
		},
	},
	plugins: [],
}
