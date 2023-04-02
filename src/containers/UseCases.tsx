'use client'
import styled from 'styled-components'

import { SmartCard } from '@/components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 8rem 2rem;
  box-sizing: border-box;
  row-gap: 8rem;

  max-width: 1080px;
  margin: 0 auto !important;
  float: none !important;

  @media (max-width: 414px) {
    p {
      font-size: 16px;
      line-height: 22px;
      text-align: center;
    }
  }
`

const Cases = [
  {
    title: 'Search the whole internet for videos',
    case1: 'Users can search for videos on any platform, including YouTube, Vimeo, Facebook, and more.',
    case2: 'Students can search for videos on any topic, including math, science, and history.',
    case3: 'Journalists can search for videos on any topic, being general or specific including politics, sports, and entertainment.',
    image: '/assets/bat.png',
    direction: 'regular'
  }
]

const UseCases = () => {
  return (
    <>
      <Container>
        {Cases.map((item, index) => (
          <SmartCard key={index} title={item.title} case1={item.case1} case2={item.case2} case3={item.case3} image={item.image} direction={item.direction} />
        ))}
      </Container>
    </>
  )
}

export default UseCases