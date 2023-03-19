import React from 'react'
import styled from 'styled-components'

import { Button, Heading, Text, Input } from '@/components'
import { colors } from '@/utils/baseStyles'

interface iPodcasts {
  podcastList?: string[]
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8rem 2rem;

  @media (max-width: 414px) {

    padding: 8rem 0.5rem;
    p {
      text-align: center;
      line-height: 1.5rem;
    }
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;

  p {
    margin: 0.7rem;
  }

  button {
    margin-top: 1.5rem;
  }
`

const Podcasts = ({ podcastList }: iPodcasts) => {
  return (
    <Container>
      <Heading name='Podcasts' fontSize='45px' />

      {!podcastList && (
        <>
          <Text
            name="We currently don't support any podcast"
            fontSize='24px'
            font='Sono'
            color={colors.highlight.orange}
            style={{ paddingTop: '5rem' }}
          />

          <Wrapper>
            <Text name="Didn't your podcast here?" fontSize='22px' color={colors.primary.text} />
            {/* <Text name='Send us your podcast suggestion!' fontSize='22px' color={colors.primary.text} style={{ marginBottom: '5rem' }} /> */}
            <Input placeholder='Channel url' label='Send us your suggestion!' submit='Send request' />
          </Wrapper>
        </>
      )}
    </Container>
  )
}

export default Podcasts
