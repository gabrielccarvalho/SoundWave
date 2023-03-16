import React from 'react'
import styled from 'styled-components'

import { Heading, Text, Button } from '@/components'
import { colors } from '@/utils/baseStyles'

interface iJumbotron {
  primaryColor: string,
  secondaryColor: string,
  title: string,
  subtitle: string,
  extraSubtitle?: string,
  cta?: string,
  redirect?: string
}

const Background = styled.section<{primary: string, secondary: string}>`
  position: absolute;
  top: 0;
  bottom: 10%;
  width: 150%;
  left: -25%;
  height: 50rem;

  z-index: -1;

  background: url('/assets/noise.webp') repeat, linear-gradient(83.21deg, ${props => props.primary} 0%, ${props => props.secondary} 100%);
  background-blend-mode: overlay;
  -webkit-mask-image: radial-gradient(rgba(0, 0, 0, 0.5), transparent 70%);
  mask-image: radial-gradient(rgba(0, 0, 0, 0.5), transparent 70%);

  @media (max-width: 414px) {
    width: 100%;
    bottom: 0;
    top: 0;
    left: 0;

    height: 35rem;

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
    height: 30rem;
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

const CTA = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;

  p {
    max-width: 18rem;
  }

  @media (max-width: 414px) {
    flex-direction: column;
    row-gap: 1rem;
    align-items: center;
  }
`

const Jumbotron = ({ primaryColor, secondaryColor, title, subtitle, extraSubtitle, cta, redirect }: iJumbotron) => {

  return (
    <>
      <MainContainer>
        <Heading
          name={title}
          color={colors.primary.text}
          fontSize='72px'
          lineHeight='72px'
        />
        <Text
          name={subtitle}
          color={colors.primary.text}
          fontSize='24px'
          lineHeight='28px'
        />
        {extraSubtitle && (
          <Text
          name={extraSubtitle}
          color={colors.primary.text}
          fontSize='24px'
          lineHeight='28px'
          style={{ margin: 0 }}
        />
        )}
      {cta && redirect && 
        (<CTA>
          <Button
            name={cta}
            redirect={redirect}
          />
        </CTA>)}
      </MainContainer>
      <Background primary={primaryColor} secondary={secondaryColor} />
    </>
  )
}

export default Jumbotron