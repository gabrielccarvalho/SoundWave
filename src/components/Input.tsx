import React from 'react'
import styled from 'styled-components'

import { Text } from './Heading'
import Button from './Button'
import { colors } from '@/utils/baseStyles'

interface iInput {
  label: string
  placeholder: string
  submit?: string
  type?: 'email' | 'text' | 'password'
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;

  input {
    margin-top: 1.5rem;
  }

  button {
    margin-top: 1.5rem;
  }
`

const InputField = styled.input<{ inputType: string }>`
  width: 20rem;
  height: 3rem;
  border: ${props => props.inputType === 'email' || 'password' ? `3px solid ${colors.highlight.lightBlue}` : `1px solid ${colors.highlight.orange}`};
  background-color: ${colors.primary.background};
  color: ${colors.primary.text};
  border-radius: 0.5rem;
  padding: 0 1rem;
  font-size: 1rem;
  box-sizing: border-box;
  outline: none;

`

const Input = ({ label, placeholder, submit, type = 'text' }: iInput) => {
  const [value, setValue] = React.useState('')
  return (
    <Container>
      <Text name={label} fontSize='22px' />
      <InputField
        type={type}
        id='text'
        inputType={type}
        placeholder={placeholder}
        value={value}
        onChange={e => setValue(e.currentTarget.value)}
        style={type === 'email' || 'password' ? { marginTop: '0' } : { marginTop: '1.5rem'}}
      />
      {submit && (
        <Button
          name={submit}
          link={`mailto:contact@soundwave.com.br?subject=Podcast suggestion&body=${value}`}
          color={colors.primary.background}
          bgColor={colors.highlight.orange}
        />
      )}
    </Container>
  )
}

export default Input
