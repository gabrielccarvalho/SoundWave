'use client'
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
  btnType?: 'login' | 'action' | 'submit' | 'redirect' | 'navbar'
  icon?: string
  size?: number
  style?: React.CSSProperties
  type?: 'button' | 'submit' | 'reset'
}

const Component = styled.button<{bgColor: string, btnType?: string, color?: string}>`
  background-color: ${props => props.bgColor};
  border: ${props => props.btnType === 'login' || props.btnType === 'navbar' ? 'none' : `3px solid ${colors.primary.background}`};
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
    background-color : ${props => props.btnType === 'navbar' ? 'inherit' : (props.btnType === 'submit' ? colors.primary.background : props.color)};
    border: 3px solid ${props => props.btnType === 'navbar' ? 'inherit' : props.btnType === 'submit' ? colors.highlight.lightBlue : props.bgColor};

    p {
      color: ${props => props.btnType === 'navbar' ? colors.secondary.text : props.btnType === 'submit' ? colors.primary.text : props.bgColor};
    }
  }
`

const Button = ({ name, onClick, link, color = colors.highlight.blueText, bgColor = colors.primary.text, btnType = 'action', icon, size = 22, style, type = 'button' }: iButton) => {
  return (
    <>
      {link ? (
        <a href={link} target='_blank'>
          <Component onClick={onClick} bgColor={bgColor} btnType={btnType} style={style} color={color} type={type}>
            {icon ? <Image src={icon} alt={name} width={size} height={size} /> : <Text name={name} color={color} fontSize='16px' />}
          </Component>
        </a>
      ) : btnType === 'login' ? (
        <Component onClick={onClick} bgColor={bgColor} btnType={btnType} style={style} color={color} type={type}>
          {icon ? <Image src={icon} alt={name} width={size} height={size} /> : <Text name={name} color={color} fontSize='16px' />}
        </Component>
      ) : (
        <Component onClick={onClick} bgColor={bgColor} btnType={btnType} style={style} color={color} type={type}>
          {icon ? <Image src={icon} alt={name} width={size} height={size} /> : <Text name={name} color={color} fontSize='16px' />}
        </Component>
      )}
    </>
  )
}

export default Button
