import React from 'react'
import styled from 'styled-components'

import { Heading, Text, Button, SquigglyLines } from '@/components'
import { colors } from '@/utils/baseStyles'

interface iJumbotron {
  primaryColor: string,
  secondaryColor: string,
  title: string,
  subtitle: string,
  extraSubtitle?: string,
  cta?: string,
  redirect?: string
  squigglyLinesColor?: string,
  squigglyLWord?: string,
  squigglyRWord?: string
}

const Background = styled.section<{primary: string, secondary: string}>`
  position: absolute;
  top: 200px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  width: 800px;
  height: 1000px;

  z-index: -1;

  background: url('/assets/noise.webp') repeat, linear-gradient(83.21deg, ${props => props.primary} 0%, ${props => props.secondary} 120%);
  background-blend-mode: overlay;
  -webkit-mask-image: radial-gradient(rgba(0, 0, 0, 0.5), transparent 75%);
  mask-image: radial-gradient(rgba(0, 0, 0, 0.5), transparent 75%);

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

  text-align: center;
  row-gap: 1rem;

  max-width: 60rem;
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

const Jumbotron = ({ primaryColor, secondaryColor, title, subtitle, extraSubtitle, cta, redirect, squigglyLWord, squigglyRWord }: iJumbotron) => {

  return (
    <>
      <MainContainer>
        {(squigglyLWord && squigglyRWord) ?(
          <h1 style={{
            display: 'block',
            margin: '0 auto',
            marginBottom: '3rem',
            textAlign: 'center',
            fontSize: '72px',
            marginTop: '10rem',
            fontFamily: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
            fontFeatureSettings: "normal",
          }}>
          Search and find any video{" "}
          <span style={{
            display: 'inline-block',
            position: 'relative',
            fontWeight: 'bold',
            color: colors.highlight.blueText,
            whiteSpace: 'nowrap'
          }}>
            <SquigglyLines />
            <span style={{
              position: 'relative'
            }}>
              using AI
            </span>
          </span>{" "}
          without effort.
        </h1>
        ) : (
          <Heading
            name={title}
            color={colors.primary.text}
            fontSize='72px'
            lineHeight='72px'
            font='normal'
          />
        )}
        <Text
          name={subtitle}
          color={colors.primary.text}
          fontSize='24px'
          lineHeight='28px'
          style={{ marginTop: '5rem' }}
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
            link={redirect}
          />
        </CTA>)}
      </MainContainer>
      <Background primary={primaryColor} secondary={secondaryColor} />
    </>
  )
}

export default Jumbotron
