import React from 'react'
import styled from 'styled-components'
import { Text } from './Heading'

import { colors } from '@/utils/baseStyles'
import Image from 'next/image'

interface iButton {
  name: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  link?: string
  color?: string
  bgColor?: string
  type?: 'login' | 'action' | 'redirect'
  icon?: string
  size?: number
  style?: React.CSSProperties
}

const Component = styled.button<{bgColor: string, btnType?: string}>`
  background-color: ${props => props.bgColor};
  border: ${props => props.btnType === 'login' ? 'none' : `1px solid ${colors.primary.background}`};
  border-radius: ${props => props.btnType === 'login' ? '0' : '50px'};
  padding: ${props => props.btnType === 'login' ? '0 1rem' : '0.2rem 1rem'};
  display: flex;
  align-items: center;
  justify-content: center;

  transition: transform .2s; /* Animation */
  cursor: pointer;

  p {
    margin: ${props => props.btnType === 'login' ? '0.7rem' : null};
  }

  :hover {
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
  }
`

const Button = ({ name, onClick, link, color = colors.primary.highlight.blue, bgColor = colors.primary.text, type = 'action', icon, size = 22, style }: iButton) => {
  return (
    <>
      {link ? (
        <a href={link} target='_blank'>
          <Component onClick={onClick} bgColor={bgColor} style={style}>
            {icon ? <Image src={icon} alt={name} width={size} height={size} /> : <Text name={name} color={color} fontSize='16px' />}
          </Component>
        </a>
      ) : type === 'login' ? (
        <Component onClick={onClick} bgColor={bgColor} btnType={type} style={style}>
          {icon ? <Image src={icon} alt={name} width={size} height={size} /> : <Text name={name} color={color} fontSize='16px' />}
        </Component>
      ) : (
        <Component onClick={onClick} bgColor={bgColor} style={style}>
          {icon ? <Image src={icon} alt={name} width={size} height={size} /> : <Text name={name} color={color} fontSize='16px' />}
        </Component>
      )}
    </>
  )
}

export default Button
