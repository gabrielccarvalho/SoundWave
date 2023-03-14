import React from 'react'
import styled from 'styled-components'
import { Heading, Text } from './Heading'

interface iTimeBox {
  time: number
  und: string
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  height: 8rem;
  width: 8rem;
  background: hsla(0, 0%, 100%, 0.024);
  border-radius: 30px;

  @media (max-width: 414px) {
    padding: 1rem;
    height: 6rem;
    width: 6rem;

    h1 {
      font-size: 32px;
      margin: 0;
    }

    p {
      font-size: 16px;
    }
  }
`

const TimeBox = ({ time, und }: iTimeBox) => {

  return (
    <Container>
      <Heading name={`${time}`} color='#8973FD' fontSize='108px' font='Sono' />
      <Text name={und.toUpperCase()} color='#798EB0' fontSize='24px' font='Sono' />
    </Container>
  )
}

export default TimeBox