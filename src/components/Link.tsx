import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { Text } from './Heading'

interface iLink {
  name: string
  href: string
  fontSize?: string
  font?: 'Poppins' | 'Sono'
  color?: string
  disabled?: boolean
  insideLink?: boolean
}

const LinkComponent = ({ href, name, fontSize = '16px', font = 'Poppins', color = '#fff', disabled = false, insideLink = false }: iLink) => {
  return (
    <>
      {disabled ? (
        <Text name={name} fontSize={fontSize} font={font} color={color} style={{ cursor: 'pointer' }} />
      ) : insideLink ? (
        <Link href={href}>
          <Text name={name} fontSize={fontSize} font={font} color={color} />
        </Link>
      ) : (
        <a href={href} target='_blank' rel='noreferrer'>
          <Text name={name} fontSize={fontSize} font={font} color={color} />
        </a>
      )}
    </>
  )
}

export default LinkComponent
