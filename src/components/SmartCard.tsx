'use client'
import Image from 'next/image'

import styled from 'styled-components'

import { Heading, Text } from './Heading'

interface iSmartCard {
  title: string
  case1: string
  case2: string
  case3: string
  image: string
  direction: string
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  height: 20rem;
  box-sizing: border-box;
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 40rem;
`

const SmartCard = ({ title, case1, case2, case3, image, direction }: iSmartCard) => {
  return (
    <>
      <Container style={direction === 'regular' ? { flexDirection: 'row' } : { flexDirection: 'row-reverse' }}>
        <Section>
          <Heading name={title} font='normal' style={{ fontWeight: 'bold' }} fontSize='38px' />
          <Text name={case1} fontSize='18px' lineHeight='24px' />
          <Text name={case2} fontSize='18px' lineHeight='24px' />
          <Text name={case3} fontSize='18px' lineHeight='24px' />
        </Section>
        <Section>
          <Image src={image} width={250} height={250} alt={title} style={{
            borderRadius: '50%',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#000'
          }} />
        </Section>
      </Container>
    </>
  )
}

export default SmartCard