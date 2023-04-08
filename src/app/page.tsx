import { HHeader as Header, PFeatures as Features, PSupport as Support } from "@/containers"
import { Navbar, Footer } from "@/components"

const Home = () => {
	return (
		<>
			<Navbar />
			<Header />
			<Features />
			<Support />
			<Footer />
		</>
	)
}

export default Home
