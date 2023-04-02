import { Navbar, Footer, FirstVersion, Jumbotron, UseCases } from '@/containers';
import { colors } from '@/utils/baseStyles'

export const metadata = {
  title: 'Welcome to the future | SoundWave',
  description: 'Search smarter, not harder.',
};

const Home = () => {
  return (
    <>
      <Navbar />
      <Jumbotron
        primaryColor={colors.highlight.blueText}
        secondaryColor={colors.highlight.lightBlue}
        title='Search and find any video'
        subtitle='SoundWave is a powerful podcast search engine that helps you find the content you want without any effort.'
        squigglyLWord='using AI'
        squigglyRWord='in seconds.'
        />
      <FirstVersion />
      <UseCases />
      <Footer />
    </>
  )
}

export default Home
