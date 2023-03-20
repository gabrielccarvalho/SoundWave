import React from 'react'
import styled from 'styled-components'

import { Countdown, Heading, Text } from '@/components'
import Image from 'next/image'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10rem 2rem;
  box-sizing: border-box;
  row-gap: 4rem;

  max-width: 1080px;
  margin: 0 auto !important;
  float: none !important;

  @media (max-width: 414px) {
    margin-bottom: 8rem !important;
    p {
      font-size: 16px;
      line-height: 22px;
      text-align: center;
    }
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 414px) {
    flex-direction: column;
    text-align: center;
  }
`

const FirstVersion = () => {
  return (
    <>
      <Container id='showcase'>
        <TextWrapper>
          <Heading
            name='Our first closed beta is coming soon!'
            fontSize='32px'
          />
          <Image src='/icons/conffeti.png' width={48} height={48} alt='conffeti' />
        </TextWrapper>
        <Countdown />
        <Text
          name='We are working hard to bring you the best experience possible.'
          fontSize='22px'
          style={{
            marginBottom: '0'
          }}
        />
        <Text
          name='if you want to join us on the launch, fill the form'
          specialWord='here'
          redirect='https://forms.gle/fW7bGi9iCuowzvsN8'
          fontSize='22px'
          style={{
            margin: '0'
          }}
          />
      </Container>
    </>
  )
}

export default FirstVersion
