import React from 'react';

import { SEO } from '@/components';
import { Navbar, Footer, FirstVersion, Jumbotron } from '@/containers';
import { colors } from '@/utils/baseStyles'

const Home = () => {
  return (
    <>
      <SEO
        title='Welcome to the future'
        description='Search anything you want with SoundWave, the best podcast search engine in the world.'
        image='assets/home-meta.png'
      />
      <Navbar />
      <Jumbotron
        primaryColor={colors.primary.highlight.blue}
        secondaryColor={colors.primary.highlight.purple}
        title='Search smarter, not harder'
        subtitle='SoundWave is a powerful podcast search engine that helps you find the content you want without any effort.'
        />
      <FirstVersion />
      <Footer />
    </>
  )
}

export default Home
