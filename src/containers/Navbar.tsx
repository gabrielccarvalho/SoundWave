import React from 'react'
import styled from 'styled-components'

import { Dropdown, Heading, SocialMedia } from '@/components'
import Image from 'next/image'

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
`

const Divider = styled.hr`
  margin: 0;
  height: 0;
  border-width: 0;
  opacity: 0.25;
  border-top-width: 1px;
`

const Left = styled.div`
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
        <Left>
          <Logo>
            <Image src='/assets/logo.svg' width={24} height={24} alt='logo' />
            <Heading name='SoundWave' />
          </Logo> {/* Logo placeholder */}
          <Dropdown name='Showcase' />
          <Dropdown name='Blog' />
          <Dropdown name='About' />
        </Left>

        <SocialMedia />
      </Container>
      <Divider />
    </>
  )
}

export default Navbar
