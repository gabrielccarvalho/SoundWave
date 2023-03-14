import React from 'react';

import { SEO } from '@/components';
import { Navbar, CallToAction, Footer, Showcase } from '@/containers';

const Home = () => {
  return (
    <>
      <SEO
        title='Welcome to the future'
        description='Search anything you want with SoundWave, the best podcast search engine in the world.'
      />
      <Navbar />
      <CallToAction />
      <Showcase />
      <Footer />
    </>
  )
}

export default Home
