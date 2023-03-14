import React from 'react'
import styled from 'styled-components'

import { Text } from './Heading'

interface iLink {
  name: string
  href: string
  fontSize?: string
  font?: 'Poppins' | 'Sono'
  color?: string
}

const Link = ({ href, name, fontSize = '16px', font = 'Poppins', color = '#fff' }: iLink) => {
  return (
    <a href={href} target='_blank' rel='noreferrer'>
      <Text name={name} fontSize={fontSize} font={font} color={color} />
    </a>
  )
}

export default Link
