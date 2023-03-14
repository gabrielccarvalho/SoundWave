import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { Heading, Text } from './Heading'

interface iMember {
  name: string
  image: string
  role: string
}

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

const Member = ({ name, image, role }: iMember) => {
  return (
    <Container>
      <Image
        src={image}
        height={220}
        width={220}
        alt='CTO'
        style={{ borderRadius: '50%' }}
      />
      <Heading name={name} fontSize='32px' />
      <Text name={role} fontSize='24px' font='Sono' color='#48BF91' />
    </Container>
  )
}

export default Member