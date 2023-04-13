import { HHeader as Header, HSupport as Support, NewsLetter } from "@/containers"
import { Navbar, Footer } from "@/components"

const Home = () => {
	return (
		<>
			<Navbar />
			<Header />
			<Support />
			<div className='relative pb-20 pt-16'>
				<div className='bg-grid noise-underlay absolute inset-0 mt-32' />
				<NewsLetter />
			</div>
			<Footer />
		</>
	)
}

export default Home
