import React from 'react'
import styled from 'styled-components'

import { SocialMedia, Text } from '@/components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  column-gap: 2rem;
  padding: 1rem 2rem;
  height: 15rem;
  box-sizing: border-box;

  max-width: 1080px; 
  margin: 0 auto !important; 
  float: none !important; 
`

const Divider = styled.hr`
  margin: 0;
  height: 0;
  border-width: 0;
  opacity: 0.25;
  border-top-width: 1px;
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0rem;
  align-items: flex-start;
`

const Col = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 4rem;
`

const PolicyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  column-gap: 1rem;
  padding: 1rem 2rem;
  height: 5rem;
  box-sizing: border-box;

  max-width: 1080px; 
  margin: 0 auto !important; 
  float: none !important; 
`

const Footer = () => {
  return (
    <>
      <Divider />
      <Container>
        <Col>
          <Left>
            <Text name='Discover' color='#f2f6fa6b' fontSize='16px' font='Sono' />
            <a href='' target='_blank' rel='noreferrer'>
              <Text name='Blog' fontSize='16px' font='Sono'/>
            </a>
            <a href='' target='_blank' rel='noreferrer'>
              <Text name='Showcase' fontSize='16px' font='Sono'/>
            </a>
            <a href='' target='_blank' rel='noreferrer'>
              <Text name='Community' fontSize='16px' font='Sono'/>
            </a>
          </Left>
          <Left>
            <Text name='Links' color='#f2f6fa6b' fontSize='16px' font='Sono'/>
            <a href='' target='_blank' rel='noreferrer'>
              <Text name='About' fontSize='16px' font='Sono'/>
            </a>
            <a href='' target='_blank' rel='noreferrer'>
              <Text name='Blog' fontSize='16px' font='Sono'/>
            </a>
            <a href='' target='_blank' rel='noreferrer'>
              <Text name='Careers' fontSize='16px' font='Sono'/>
            </a>
          </Left>
        </Col>
        <SocialMedia size={34}/>
      </Container>
      <Divider />
      <PolicyContainer>
        <Col>
          <a href='' target='_blank' rel='noreferrer'>
            <Text name='Terms of Service' color='#f2f6fa6b' fontSize='14px' font='Sono' />
          </a>
          <a href='' target='_blank' rel='noreferrer'>
            <Text name='Privacy Policy' color='#f2f6fa6b' fontSize='14px' font='Sono' />
          </a>
        </Col>
        <Text name='© 2023 SoundWave. All rights reserved.' color='#f2f6fa6b' fontSize='14px' font='Sono' />
      </PolicyContainer>
    </>
  )
}

export default Footer
