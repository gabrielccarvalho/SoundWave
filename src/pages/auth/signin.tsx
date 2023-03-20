import React from 'react'
import { Navbar, Footer, Form } from '@/containers'
import { SEO } from '@/components'


const SigninPage = () => {

  return (
    <>
      <SEO
        title='Welcome to the future'
        description='Search smarter, not harder.'
        image='assets/twitter_img.png'
      />
      <Navbar />
      <Form />
      <Footer />
    </>
  );
}

export default SigninPage
