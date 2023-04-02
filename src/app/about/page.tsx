import { Navbar, Footer, Header, Team } from '@/containers';

export const metadata = {
  title: 'About SoundWave | SoundWave',
  description: 'The people and reasoning behind SoundWave',
}

const Home = () => {
  return (
    <>
      <Navbar />
      <Header title='Our Team and Project' />
      <Team />
      <Footer />
    </>
  )
}

export default Home
