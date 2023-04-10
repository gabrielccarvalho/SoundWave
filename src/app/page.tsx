import { HHeader as Header, HSupport as Support, NewsLetter } from "@/containers"
import { Navbar, Footer } from "@/components"

const Home = () => {
	return (
		<>
			<Navbar />
			<Header />
			<Support />
			<NewsLetter />
			<Footer />
		</>
	)
}

export default Home
