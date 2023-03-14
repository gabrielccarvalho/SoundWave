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

  background: url('/assets/noise.webp') repeat, linear-gradient(83.21deg, #0076BE 0%, #48BF91 100%);
  background-blend-mode: overlay;
  -webkit-mask-image: radial-gradient(rgba(0, 0, 0, 0.5), transparent 70%);
  mask-image: radial-gradient(rgba(0, 0, 0, 0.5), transparent 70%);

  @media (max-width: 414px) {
    width: 100%;
    bottom: 0;
    top: 0;
    left: 0;

    -webkit-mask-image: radial-gradient(rgba(0, 0, 0, 0.5), transparent 120%);

  }
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

  @media (max-width: 414px) {
    padding: 1rem;
    h1 {
      font-size: 42px;
      line-height: 42px;
      font-weight: bold;
    }

    p {
      font-size: 16px;
      line-height: 18px;
    }
  }
`

const WhoWeAre = () => {

  return (
    <>
      <MainContainer>
        <Heading
          name='Who we are'
          color='#fff'
          fontSize='72px'
          lineHeight='0px'
        />
        <Text
          name='Know more about soundwave and our mission'
          color='#fff'
          fontSize='24px'
          lineHeight='24px'
        />
      </MainContainer>
      <Background />
    </>
  )
}

export default WhoWeAre
