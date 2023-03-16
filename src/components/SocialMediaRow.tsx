import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

interface iSocialMedia {
  size?: number
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  column-gap: 1rem;
  align-items: center;
  padding: 0 2rem;
  height: 5rem;
  box-sizing: border-box;
`

const SocialMedia = ({ size = 24 }: iSocialMedia) => {
  return (
    <Container>
      <a href='https://twitter.com/soundwave_br' target='_blank' rel='noreferrer'>
        <Image src='/icons/twitter.png' width={size} height={size} alt='twitter logo' />
      </a>
      <a href='https://github.com/gabrielccarvalho' target='_blank' rel='noreferrer'>
        <Image src='/icons/github.png' width={size} height={size} alt='github logo' />
      </a>
      <a href='https://www.linkedin.com/in/gabriel-campos-b7618418a/' target='_blank' rel='noreferrer'>
        <Image src='/icons/linkedin.png' width={size} height={size} alt='linkedin logo' />
      </a>
    </Container>
  )
}

export default SocialMedia
