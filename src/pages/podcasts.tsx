import React from 'react';

import { SEO } from '@/components';
import { Navbar, Footer, Jumbotron, Podcasts } from '@/containers';
import { colors } from '@/utils/baseStyles'

const About = () => {
  return (
    <>
      <SEO
        title='Supported Podcasts'
        description='Want to see your podcast here? Contact us!'
      />
      <Navbar />
      <Jumbotron
        primaryColor={colors.primary.highlight.red}
        secondaryColor={colors.primary.highlight.orange}
        title='Podcasts'
        subtitle='Here are all podcasts we support right now.'
        />
        <Podcasts />
      <Footer />
    </>
  )
}

export default About
