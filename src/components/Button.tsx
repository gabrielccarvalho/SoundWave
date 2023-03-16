import React from 'react'
import styled from 'styled-components'
import { Text } from './Heading'

import { colors } from '@/utils/baseStyles'

interface iButton {
  name: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  redirect?: string
  color?: string
  bgColor?: string
}

const Component = styled.button<{bgColor: string}>`
  background-color: ${props => props.bgColor};
  border: 1px solid ${colors.primary.background};
  border-radius: 50px;
  padding: 0.2rem 1rem;

  transition: transform .2s; /* Animation */
  cursor: pointer;

  :hover {
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
  }
`

const Button = ({ name, onClick, redirect, color = colors.primary.highlight.blue, bgColor = colors.primary.text }: iButton) => {
  return (
    <>
      {redirect ? (
        <a href={redirect} target='_blank'>
          <Component onClick={onClick} bgColor={bgColor}>
            <Text name={name} color={color} fontSize='16px' />
          </Component>
        </a>
      ) : (
        <Component onClick={onClick} bgColor={bgColor}>
          <Text name={name} color={color} fontSize='16px' />
        </Component>
      )}
    </>
  )
}

export default Button
