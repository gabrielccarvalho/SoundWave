import React from 'react';

import { SEO } from '@/components';
import { Navbar, Footer, FirstVersion, Jumbotron, Team } from '@/containers';
import { colors } from '@/utils/baseStyles'

const Home = () => {
  return (
    <>
      <SEO
        title='Welcome to the future'
        description='Search smarter, not harder.'
        image='assets/twitter_img.png'
      />
      <Navbar />
      <Jumbotron
        primaryColor={colors.highlight.blue}
        secondaryColor={colors.highlight.purple}
        title='Search smarter, not harder'
        subtitle='SoundWave is a powerful podcast search engine that helps you find the content you want without any effort.'
        />
      <FirstVersion />
      <Team />
      <Footer />
    </>
  )
}

export default Home
