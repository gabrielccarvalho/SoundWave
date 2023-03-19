import React from 'react';

import { SEO } from '@/components';
import { Navbar, Footer, Team, Jumbotron } from '@/containers';
import { colors } from '@/utils/baseStyles'

const About = () => {
  return (
    <>
      <SEO
        title='Who we are?'
        description='The people behind SoundWave'
        image='assets/twitter_img.png'
      />
      <Navbar />
      <Jumbotron
        primaryColor={colors.highlight.lightBlue}
        secondaryColor={colors.highlight.green}
        title='Who we are'
        subtitle='Know more about SoundWave and our mission'
      />
      <Team />
      <Footer />
    </>
  )
}

export default About
