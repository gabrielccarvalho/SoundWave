import React from 'react';

import { Navbar, Footer, Podcasts, Header } from '@/containers';

export const metadata = {
  title: 'Supported Podcasts | SoundWave',
  description: 'Want to see your podcast here? Contact us!',
};

const About = () => {
  return (
    <>
      <Navbar />
      <Header title='Explore your podcasts' />
      <Podcasts />
      <Footer />
    </>
  )
}

export default About
