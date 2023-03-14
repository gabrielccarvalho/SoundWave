import React from 'react'
import styled from 'styled-components'

import { Heading, Text } from '@/components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  height: 75rem;
  box-sizing: border-box;

  max-width: 1080px;
  margin: 0 auto !important;
  float: none !important;
`

const Showcase = () => {
  return (
    <>
      <Container>
        <Heading name='Showcase' />
        <Text name='We are working on this section, please come back later.' />
      </Container>
    </>
  )
}

export default Showcase
