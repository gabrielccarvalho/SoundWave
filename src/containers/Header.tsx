import React from 'react'
import styled from 'styled-components'

import { Heading } from '@/components'
import { colors } from '@/utils/baseStyles'

interface iHeader {
  title: string
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 1rem;

  @media (max-width: 414px) {
    padding-top: 10rem;
    height: 10rem;

    h1 {
      font-size: 42px;
      line-height: 50px;
      margin: 0;
    }
  }
`

const NoisyBg = styled.section<{primary: string, secondary: string}>`
  position: absolute;
  top: 0;
  width: 100%;
  left: 0;
  height: 30rem;

  z-index: -1;

  background: url('/assets/noise.webp') repeat, linear-gradient(83.2deg, ${props => props.primary} 40%, ${props => props.secondary} 100%);
  background-blend-mode: overlay;
  /* -webkit-mask-image: linear-gradient(to top, transparent 30%, ${colors.primary.background} 100%);
  mask-image: linear-gradient(to top, transparent 30%, ${colors.primary.background} 100%); */
  -webkit-mask-image: radial-gradient(rgba(0, 0, 0, 0.7), transparent 75%);
  mask-image: radial-gradient(rgba(0, 0, 0, 0.7), transparent 75%);

  @media (max-width: 414px) {
    width: 100%;
    bottom: 0;
    top: 0;
    left: 0;

    height: 25rem;

    -webkit-mask-image: radial-gradient(rgba(0, 0, 0, 0.5), transparent 120%);

  }
`

const Header = ({ title }: iHeader) => {
  return (
    <>
      <Container>
          <Heading
            name={title}
            fontSize='72px'
            lineHeight='82px'
            style={{ maxWidth: '50rem', textAlign: 'center', fontWeight: 'bold' }}
            font='normal'
          />
        </Container>
        <NoisyBg primary={colors.highlight.blueText} secondary={colors.highlight.lightBlue} />
    </>
  )
}

export default Header
