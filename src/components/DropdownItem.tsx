import React from 'react'
import styled from 'styled-components'

import { Text } from './Heading'

interface iDropdownItem {
  name: string
  onClick?: () => void
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

      color: #f2f6fa78;
    }
  }
`

const DropdownItem = ({ name, onClick }: iDropdownItem) => {
  return (
    <Container onClick={onClick}>
      <Text name={name} fontSize='16px' />
    </Container>
  )
}

export default DropdownItem
