/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		remotePatterns: [
			{
				hostname: "*.googleusercontent.com",
			},
		],
	},
	experimental: {
		appDir: true,
	},
	onDemandEntries: {
		// period (in ms) where the server will keep pages in the buffer
		maxInactiveAge: 10 * 1000,
		// number of pages that should be kept simultaneously without being disposed
		pagesBufferLength: 1,
		env: {
			NEXTAUTH_URL: process.env.NEXTAUTH_URL,
			GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
			GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
			SECRET: process.env.SECRET,
		}
	},
}

module.exports = nextConfig
