import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { Heading, Text } from './Heading'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 2rem;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;

  h1 {
  margin: 0;
  margin-top: 1rem;
  text-align: center;
  }
`

const Member = () => {
  return (
    <Container>
      <Image
        src='/assets/me.JPG'
        height={220}
        width={220}
        alt='CTO'
        style={{ borderRadius: '50%' }}
      />
      <Heading name='Gabriel Campos' fontSize='32px' />
      <Text name='CTO & Founder' fontSize='24px' font='Sono' color='#48BF91' />
    </Container>
  )
}

export default Member