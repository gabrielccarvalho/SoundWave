import React from 'react';

import { SEO } from '@/components';
import { Navbar, Footer, Header, Team } from '@/containers';

const Home = () => {
  return (
    <>
      <SEO
        title='About SoundWave'
        description='The people and reasoning behind SoundWave'
        image='assets/twitter_img.png'
      />
      <Navbar />
      <Header title='Our Team and Project' />
      <Team />
      <Footer />
    </>
  )
}

export default Home
