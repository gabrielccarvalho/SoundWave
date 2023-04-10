import "../styles/globals.css"

import { Inter } from "next/font/google"

const inter = Inter({
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
		<html lang="en" className={inter.className}>
			<body>{children}</body>
		</html>
	)
}
