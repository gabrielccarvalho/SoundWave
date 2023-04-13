import { PrivacyHeader as Header, Privacy } from "@/containers"
import { Navbar, Footer } from "@/components"

const Home = () => {
	return (
		<>
			<Navbar />
			<Header />
			<div className='relative pb-20 pt-16'>
				<div className='bg-grid noise-underlay absolute inset-0 mt-32' />
				<Privacy />
			</div>
			<Footer />
		</>
	)
}

export default Home
