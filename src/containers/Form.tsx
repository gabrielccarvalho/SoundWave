import React from 'react'
import styled from 'styled-components'
import { signIn } from 'next-auth/react'

import { Heading, Text, Button, Input } from '@/components'
import { colors } from '@/utils/baseStyles'

interface iForm {
}

const Background = styled.section<{primary: string, secondary: string}>`
  position: absolute;
  top: 0;
  bottom: 10%;
  width: 150%;
  left: -25%;
  height: 80rem;

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
  justify-content: flex-start;
  align-items: center;
  /* height: 40rem; */
  height: 30rem;
  width: 30rem;
  text-align: center;
  row-gap: 1rem;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 2rem;
  box-shadow:
    0 0 60px 10px ${colors.highlight.green},
    0 0 100px 20px ${colors.highlight.blue};

  max-width: 40rem;
  margin: 15rem auto !important;
  float: none !important;

  @media (max-width: 414px) {
    padding: 1rem;
    height: 20rem;
    width: unset;

    margin: 12rem 1rem !important;
    h1 {
      font-size: 42px;
      line-height: 42px;
      font-weight: bold;
    }

    p {
      font-size: 12px;
      line-height: 12px;
    }

    button {
      margin-top: 2rem !important;
    }
  }
`

const Wrapper = styled.div`
  flex: 1;
  height: calc(100vh - 40rem);
  flex-direction: column;


  @media (max-width: 414px) {
    height: calc(100vh - 20rem);
  }
`

const Form = ({}: iForm) => {

  return (
    <Wrapper>
      <MainContainer>
        <Heading
          name='Login'
          color={colors.primary.text}
          fontSize='48px'
          lineHeight='48px'
          style={{ paddingTop: '3rem' }}
        />
        {/* <Input label='Email' placeholder='email@email.com' type='email' />
        <Input label='Password' placeholder='*******' type='password' /> */}
        <Button
          name='Login with Google'
          onClick={() => signIn('google', { callbackUrl: process.env.NEXTAUTH_URL })}
          style={{
            marginTop: '5rem',
            borderRadius: '0.5rem',
            width: '50%',
          }}
          color={colors.highlight.blue}
        />
      </MainContainer>
      <Background primary={colors.highlight.lightBlue} secondary={colors.highlight.blue} />
    </Wrapper>
  )
}

export default Form
