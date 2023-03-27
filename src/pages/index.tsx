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
        primaryColor={colors.highlight.blueText}
        secondaryColor={colors.highlight.lightBlue}
        title='Search and find any video'
        subtitle='SoundWave is a powerful podcast search engine that helps you find the content you want without any effort.'
        squigglyLWord='using AI'
        squigglyRWord='in seconds.'
        />
      <FirstVersion />
      <Team />
      <Footer />
    </>
  )
}

export default Home
