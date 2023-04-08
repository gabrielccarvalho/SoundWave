import "../styles/globals.css"

import { Source_Sans_Pro } from "next/font/google"

const source = Source_Sans_Pro({
	subsets: ["latin"],
	display: "swap",
	weight: ["200", "300", "400", "600", "900"],
})

export const metadata = {
	title: "SoundWave",
	description: "A video search engine built with AI that came to help you find your videos.",
}

export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="en" className={source.className}>
			<body>{children}</body>
		</html>
	)
}
