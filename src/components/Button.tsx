import React from 'react'
import styled from 'styled-components'
import { Text } from './Heading'

import { colors } from '@/utils/baseStyles'

interface iButton {
  name: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  redirect?: string
}

const Component = styled.button`
  background-color: ${colors.primary.text};
  border-radius: 50px;
  padding: 0.2rem 1rem;

  transition: transform .2s; /* Animation */
  cursor: pointer;

  :hover {
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
  }
`

const Button = ({ name, onClick, redirect }: iButton) => {
  return (
    <>
      {redirect ? (
        <a href={redirect} target='_blank'>
          <Component onClick={onClick}>
            <Text name={name} color={colors.primary.highlight.blue} fontSize='16px' />
          </Component>
        </a>
      ) : (
        <Component onClick={onClick}>
          <Text name={name} color={colors.primary.highlight.blue} fontSize='16px' />
        </Component>
      )}
    </>
  )
}

export default Button
