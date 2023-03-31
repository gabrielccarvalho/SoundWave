'use client'
import React from 'react'
import styled from 'styled-components'

import { Member, Heading, Text } from '@/components'
import { colors } from '@/utils/baseStyles'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 4rem 2rem;
  box-sizing: border-box;
  column-gap: 4rem;

  max-width: 1080px;
  margin: 4rem auto !important;
  float: none !important;

  @media (max-width: 414px) {
    flex-direction: column;
    padding: 1rem 2rem;

    p {
      font-size: 16px;
      line-height: 22px;
      text-align: center;
    }
  }
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 2rem;
  align-items: stretch;
  justify-content: center;
  text-align: center;
  width: 50%;

  @media (max-width: 414px) {
    flex-direction: column;
    row-gap: 2rem;
    width: 100%;

    h1:first-child {
      font-size: 42px;
    }

    h1:nth-child(1) {
      margin-bottom: inherit !important;
    }

    p {
      margin-top: 1rem !important;
    }
  }
`

const Team = () => {
  return (
    <>
      <Container id='about-section'>
        <Section>
          <Heading
            name='Project'
            fontSize='38px'
            font='Sono'
            color={colors.highlight.blueText}
          />
          <Text
            name='SoundWave started with a simple idea:
            help people find the desired content without being
            distracted or get lost with so many long videos and
            clickbaits. Here you only need to type the content you
            want and we will show you the best results.'
            fontSize='22px'
            lineHeight='40px'
            style={{
              maxWidth: '50rem',
              textAlign: 'justify',
              letterSpacing: '0.1px',
              marginTop: '2rem',
            }}
          />
          </Section>
          <Section>
            <Heading
              name='Team'
              fontSize='38px'
              color={colors.highlight.blueText}
              font='Sono'
              style={{ marginBottom: '3rem' }}
            />
            <Member
              name='Gabriel Campos'
              image='/assets/me.JPG'
              role='CTO & Founder'
            />
          </Section>
      </Container>
    </>
  )
}

export default Team
