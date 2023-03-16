import React from 'react'
import styled from 'styled-components'

import { Heading, Member, Text } from '@/components'
import Image from 'next/image'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 8rem 2rem;
  box-sizing: border-box;
  row-gap: 4rem;

  max-width: 1080px;
  margin: 0 auto !important;
  float: none !important;

  @media (max-width: 414px) {
    height: 50rem;
    padding-top: 4rem;

    p {
      font-size: 16px;
      line-height: 22px;
      text-align: center;
    }
  }
`

const Section = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 2rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 414px) {
    flex-direction: column;
    row-gap: 2rem;
  }
`

const Team = () => {
  return (
    <>
      <Container>
          <Heading
            name='Team'
            fontSize='45px'
          />
          <Member
            name='Gabriel Campos'
            image='/assets/me.JPG'
            role='CTO & Founder'
          />
      </Container>
    </>
  )
}

export default Team
