import React from 'react'
import styled from 'styled-components'

import { Button, Heading, Text } from '@/components'

const Background = styled.section`
  position: absolute;
  top: 0;
  bottom: 10%;
  width: 150%;
  left: -25%;
  height: 50rem;

  z-index: -1;

  background: url('/assets/noise.webp') repeat, linear-gradient(83.21deg, #3245ff 0%, #bc52ee 100%);
  background-blend-mode: overlay;
  -webkit-mask-image: radial-gradient(rgba(0, 0, 0, 0.5), transparent 70%);
  mask-image: radial-gradient(rgba(0, 0, 0, 0.5), transparent 70%);
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40rem;
  text-align: center;
  row-gap: 1rem;

  max-width: 40rem; 
  margin: 0 auto !important; 
  float: none !important; 
`

const CTA = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;

  p {
    max-width: 18rem;
  }
`

const CallToAction = () => {
  return (
    <>
      <MainContainer>
        <Heading
          name='Search anything you want'
          color='#fff'
          fontSize='72px'
          lineHeight='72px'
        />
        <Text
          name='SoundWave is a powerful podcast search engine that helps you find the content you want without any effort.'
          color='#fff'
          fontSize='24px'
          lineHeight='28px'
        />
        <CTA>
          <Text
            name="Don't waste time, join us in the beta for FREE!"
            color='#fff'
            fontSize='22px'
            lineHeight='24px'
            bold
          />
          <Button
            name='Enroll now'
            redirect='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
          />
        </CTA>
      </MainContainer>
      <Background />
    </>
  )
}

export default CallToAction