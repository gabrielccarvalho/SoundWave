import React from 'react';

import { SEO } from '@/components';
import { Navbar, Footer, Jumbotron, Podcasts, Header } from '@/containers';
import { colors } from '@/utils/baseStyles'

const About = () => {
  return (
    <>
      <SEO
        title='Supported Podcasts'
        description='Want to see your podcast here? Contact us!'
        image='assets/twitter_img.png'
      />
      <Navbar />
      <Header
        // primaryColor={colors.highlight.red}
        // secondaryColor={colors.highlight.orange}
        title='Explore your podcasts'
        />
        <Podcasts />
      <Footer />
    </>
  )
}

export default About
