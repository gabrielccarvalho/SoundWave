import React from 'react';

import { SEO } from '@/components';
import { Navbar, CallToAction, Footer, FirstVersion } from '@/containers';

const Home = () => {
  return (
    <>
      <SEO
        title='Welcome to the future'
        description='Search anything you want with SoundWave, the best podcast search engine in the world.'
        image='/assets/home-meta.png'
      />
      <Navbar />
      <CallToAction />
      <FirstVersion />
      <Footer />
    </>
  )
}

export default Home
