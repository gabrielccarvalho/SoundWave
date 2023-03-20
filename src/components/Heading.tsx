import styled from 'styled-components'
import localFont from '@next/font/local'

import { colors } from '@/utils/baseStyles'

export const poppins = localFont({
  src: '../../public/fonts/Poppins-Regular.ttf',
  variable: '--font-poppins',
})

export const sono = localFont({
  src: '../../public/fonts/Sono-Regular.ttf',
  variable: '--font-sono',
})

interface iHeading {
  name: string
  fontSize?: string
  color?: string
  lineHeight?: string
  bold?: boolean
  font?: 'Sono' | 'Poppins'
  style?: React.CSSProperties
  specialWord?: string
  redirect?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
}

const Component = styled.h1<{ fontSize: string, color: string, lineHeight: string, bold: boolean }>`
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  line-height: ${props => props.lineHeight};
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
`

const TextComponent = styled.p<{ fontSize: string, color: string, lineHeight: string, bold: boolean }>`
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  line-height: ${props => props.lineHeight};
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
`

const Heading = ({ name, fontSize = '28px', color = colors.primary.text, lineHeight = '28px', bold = false, font='Poppins', style }: iHeading) => {
  return (
    <Component
      fontSize={fontSize}
      color={color}
      lineHeight={lineHeight}
      bold={bold}
      className={ font === 'Sono' ? sono.className : poppins.className }
      style={style}
    >
      {name}
    </Component>
  )
}

const Text = ({ name, fontSize = '12px', color = colors.primary.text, lineHeight = '12px', bold = false, font='Poppins', style, specialWord, redirect, target = '_blank' }: iHeading) => {
  return (
    <TextComponent
      fontSize={fontSize}
      color={color}
      lineHeight={lineHeight}
      bold={bold}
      className={ font === 'Sono' ? sono.className : poppins.className }
      style={style}
    >
      {name}
      {specialWord && <> </>}
      {specialWord && redirect && (<a href={redirect} target={target} style={{ textDecoration: 'underline', color }}>{specialWord}</a>)}
    </TextComponent>
  )
}


export { Heading, Text }
