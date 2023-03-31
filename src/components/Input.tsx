'use client'
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
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
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
  background-color: ${colors.primary.background};
  border: ${props => (props.inputType === 'email') || (props.inputType === 'password') ? `3px solid ${colors.primary.background}` : `1px solid ${colors.primary.text}`};
  color: ${colors.primary.text};
  border-radius: 0.5rem;
  padding: 0 1rem;
  font-size: 1rem;
  box-sizing: border-box;
  outline: none;

  :hover {
    border: ${props => (props.inputType === 'email') || (props.inputType === 'password') ? `3px solid ${colors.highlight.lightBlue}` : `1px solid ${colors.highlight.lightBlue}`};
  }
  
  :focus {
    border: ${props => (props.inputType === 'email') || (props.inputType === 'password') ? `3px solid ${colors.highlight.lightBlue}` : `1px solid ${colors.highlight.lightBlue}`};
  }

`

const Input = ({ label, placeholder, submit, type = 'text', value, setValue }: iInput) => {
  return (
    <Container>
      <Text name={label} fontSize='22px' />
      <InputField
        type={type}
        id={label}
        inputType={type}
        placeholder={placeholder}
        value={value}
        onChange={e => setValue(e.currentTarget.value)}
        style={type === 'email' || type === 'password' ? { marginTop: '0' } : { marginTop: '1.5rem'}}
      />
      {submit && (
        <Button
          name={submit}
          link={`mailto:contact@soundwave.com.br?subject=Podcast suggestion&body=${value}`}
          color={colors.primary.text}
          bgColor={colors.highlight.lightBlue}
        />
      )}
    </Container>
  )
}

export default Input
