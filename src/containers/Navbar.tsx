import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import { Dropdown, Heading, SocialMedia } from '@/components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  column-gap: 1rem;
  align-items: center;
  padding: 0 2rem;
  height: 5rem;
  box-sizing: border-box;

  max-width: 1080px;
  margin: 0 auto !important;
  float: none !important;

  @media (max-width: 414px) {
    padding: 0 12px;
    column-gap: 0.2rem;
    height: 4rem;
    background-color: #17191E;
    position: fixed;
    width: 100%;

    h1 {
      font-size: 14px;
    }

    p {
      font-size: 12px;
    }

    div {
      padding: 0;
    }

    img {
      width: 18px;
      height: 18px;
    }
  }
`

const Divider = styled.hr`
  margin: 0;
  height: 0;
  border-width: 0;
  opacity: 0.25;
  border-top-width: 1px;
`

const Section = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  align-items: center;
`

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 0.5rem;
  align-items: center;
`

const Navbar = () => {
  return (
    <>
      <Container>
        <Section>
          <Logo>
            <Image src='/assets/logo.svg' width={24} height={24} alt='logo' />
            <Heading name='SoundWave' />
          </Logo> {/* Logo placeholder */}
          <Dropdown name='Showcase' />
          <Dropdown name='Blog' />
          <Dropdown name='About' />
        </Section>

        <SocialMedia />
      </Container>
      <Divider />
    </>
  )
}

export default Navbar
