import React from 'react'
import styled from 'styled-components'

import { Link, SocialMedia, Text } from '@/components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  column-gap: 2rem;
  padding: 1rem 2rem;
  height: 15rem;
  box-sizing: border-box;

  max-width: 1080px; 
  margin: 0 auto !important; 
  float: none !important; 

  @media (max-width: 414px) {
    padding: 0 1rem;
    column-gap: 1rem;

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
  flex-direction: column;
  row-gap: 0rem;
  align-items: flex-start;
`

const Col = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 4rem;
`

const PolicyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  column-gap: 1rem;
  padding: 1rem 2rem;
  height: 5rem;
  box-sizing: border-box;

  max-width: 1080px; 
  margin: 0 auto !important; 
  float: none !important;

  @media (max-width: 414px) {
    flex-direction: column;
    padding: 0;
    margin: unset;
    margin-bottom: 2rem;

    p {
      line-height: 20px;
    }
  }
`

const Footer = () => {
  return (
    <>
      <Divider />
      <Container>
        <Col>
          <Section>
            <Text name='Discover' color='#f2f6fa6b' fontSize='16px' font='Sono' />
            <Link name='Community' href='' font='Sono' disabled />
            <Link name='Showcase' href='' font='Sono' disabled />
            <Link name='Podcasts' href='' font='Sono' disabled />
          </Section>

          <Section>
            <Text name='Company' color='#f2f6fa6b' fontSize='16px' font='Sono'/>
            <Link name='About' href='/about' font='Sono' insideLink />
            <Link name='Careers' href='' font='Sono' disabled />
          </Section>
        </Col>
        <SocialMedia size={34}/>
      </Container>
      <Divider />
      <PolicyContainer>
        <Col>
          <Link name='Terms of Service' href='' font='Sono' color='#f2f6fa6b' disabled />
          <Link name='Privacy Policy' href='' font='Sono' color='#f2f6fa6b' disabled />
        </Col>
        <Text name='Copyright © 2023 SoundWave. All rights reserved.' color='#f2f6fa6b' fontSize='14px' font='Sono' />
      </PolicyContainer>
    </>
  )
}

export default Footer
