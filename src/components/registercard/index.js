import { Box, FormControl } from '@chakra-ui/react'
import React from 'react'
import StyledInput from './StyledInput'

export default function RegisterCard() {
  
  return (
    <>
      <FormControl 
      background='green.400'
      minWidth='30vw'
      height='fit-content'
      display='flex'
      flexDirection='column'
      justifyItems='flex-start'
      paddingY='10%'
      gap={3}
      borderRadius='10px'
      >
        <StyledInput label='Nome' placeholder='Nome Completo'></StyledInput>
        <StyledInput label='CPF' placeholder='000000000-00'></StyledInput>
        <StyledInput label='Email' placeholder='usuario@gmail.com' type='email'></StyledInput>
        <StyledInput label='Password' placeholder='senha123' type='password'></StyledInput>
      </FormControl>
    </>
  )
}
