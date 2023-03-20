import React from 'react'
import styled from 'styled-components'

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

    height: calc(100vh + 3.2rem);

    -webkit-mask-image: radial-gradient(rgba(0, 0, 0, 0.5), transparent 120%);

  }
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 40rem;
  /* height: 30rem; */
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
    height: 25rem;
    width: unset;

    margin: 8rem 1rem 4rem 1rem !important;

    h1 {
      font-size: 24px;
      line-height: 24px;
      font-weight: bold;
      padding-top: 0 !important;
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
  align-items: center;
  justify-content: center;


  @media (max-width: 414px) {
    height: calc(100vh - 16rem);
    margin-bottom: 4rem;
  }
`

const BetaWarning = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 0.5rem;

  p {
    margin: 0.5rem;
  }

  @media (max-width: 414px) {
    p {
      font-size: 14px;
      line-height: 14px;
      padding: 0 3rem;
      text-align: center;
    }
  }
`

const Form = ({}: iForm) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSubmit = () => {}

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
        <form
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          onSubmit={handleSubmit}
        >
          <Input label='Email' placeholder='email@email.com' type='email' value={email} setValue={setEmail} />
          <Input label='Password' placeholder='*******' type='password' value={password} setValue={setPassword} />
          <Button
            name='Login'
            type='submit'
            style={{
              marginTop: '4rem',
              borderRadius: '0.5rem',
              width: '100%',
            }}
            color={colors.highlight.blue}
          />
        </form>
      </MainContainer>
      <BetaWarning>
        <Text name='We are going to open the closed beta soon!' fontSize='22px' font='Sono' />
        <Text name='If you wish to participate, fill the form' specialWord='here' redirect='https://forms.gle/fW7bGi9iCuowzvsN8' fontSize='22px' font='Sono' />
      </BetaWarning>
      <Background primary={colors.highlight.lightBlue} secondary={colors.highlight.blue} />
    </Wrapper>
  )
}

export default Form
