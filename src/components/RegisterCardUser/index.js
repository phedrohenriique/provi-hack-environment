import {
  Box,
  Checkbox,
  FormControl,
  Text
} from '@chakra-ui/react'
import React from 'react'
import BlueButton from '../Button/BlueButton'
import StyledInput from './StyledInput'

export default function RegisterCardUser() {
  const style = {
    color: 'black',
    fontFamily: 'sans-serif',
    fontWeight: '800'
  }
  return (
    <>
      <Box height='1.5'>
        <FormControl
          background='white'
          display='flex'
          flexDirection='column'
          justifyItems='flex-start'
          gap={3}
          borderRadius='10px'
          border='1px solid black'
          width='-webkit-fit-content'
          height='-webkit-fit-content'
        >
          <Text paddingTop={3} style={style} alignSelf='center' fontSize='4xl' width='70%'>Quer ajudar uma instituição?</Text>
          <StyledInput label='nome' placeholder='Nome Completo' />
          <StyledInput label='CEP' placeholder='999999-99' />
          <StyledInput label='CPF' placeholder='000.000.000-00' />
          <StyledInput label='email' placeholder='usuario@gmail.com' type='email' />
          <StyledInput label='senha' placeholder='senha123' type='password' />
          <StyledInput label='confirmar senha' placeholder='senha123' type='password' />
          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            gap={5}
            marginTop='1%'
            paddingBottom={5}
          >
            <Checkbox border='black' width='70%'>Aceito receber informações sobre doações e  instituições via e-mail ou sms</Checkbox>
            <BlueButton text={'Cadastrar'} />
          </Box>
        </FormControl>
      </Box>
    </>
  )
}
