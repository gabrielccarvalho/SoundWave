import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import { Text } from './Heading'
import { colors } from '@/utils/baseStyles'

interface iDropdownItem {
  name: string
  onClick?: () => void
  location?: string
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 5rem;
  box-sizing: border-box;

  cursor: pointer;

  &:hover {
    p {
      -webkit-transition: color 0.15s; /* For Safari 3.0 to 6.0 */
      transition: color 0.15s; /* For modern browsers */

      color: ${colors.secondary.text};
    }
  }
`

const DropdownItem = ({ name, onClick, location }: iDropdownItem) => {
  const router = useRouter()

  const handleRedirect = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (location) {
      e.preventDefault()
      router.push(location)
    } else {
      onClick && onClick()
    }
  }
  return (
    <Container onClick={handleRedirect}>
      <Text name={name} fontSize='16px' />
    </Container>
  )
}

export default DropdownItem
