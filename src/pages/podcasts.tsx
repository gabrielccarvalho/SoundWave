import React from 'react';

import { SEO } from '@/components';
import { Navbar, Footer, Podcasts, Header } from '@/containers';

const About = () => {
  return (
    <>
      <SEO
        title='Supported Podcasts'
        description='Want to see your podcast here? Contact us!'
        image='assets/twitter_img.png'
      />
      <Navbar />
      <Header title='Explore your podcasts' />
        <Podcasts />
      <Footer />
    </>
  )
}

export default About
