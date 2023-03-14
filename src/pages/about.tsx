import React from 'react';

import { SEO } from '@/components';
import { Navbar, Footer, WhoWeAre, Team } from '@/containers';

const About = () => {
  return (
    <>
      <SEO
        title='Who we are?'
        description='The people behind SoundWave'
      />
      <Navbar />
      <WhoWeAre />
      <Team />
      <Footer />
    </>
  )
}

export default About
