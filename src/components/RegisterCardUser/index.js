import {
  Box,
  FormControl,
  Text,
  Checkbox
} from '@chakra-ui/react'
import React from 'react'
import StyledInput from './StyledInput'
import BlueButton from '../Button/BlueButton'

export default function RegisterCardUser() {

  const style = {
    color: 'black',
    fontFamily: 'sans-serif',
    fontWeight: '800'
  }
  // setting variable value and the hook useState to set it
  // same as writing const value = document.allSelect('')
  const [name, setName] = React.useState({ input: '' })
  const [cpf, setCpf] = React.useState({ input: '' })
  const [email, setEmail] = React.useState({ input: '' })
  const [password, setPassword] = React.useState({ input: '' })
  // getting the targetted component value defined in component props
  // setting the event to get the target value, in this case we pass as
  // onChange props to get the state change of value
  const nameInputHandler = (event) => {
    setName({ input: event.target.value })
    console.log('name :', name.input)
  }

  const cpfInputHandler = (event) => {
    setCpf({ input: event.target.value })
    console.log('cpf :', cpf.input)
  }

  const emailInputHandler = (event) => {
    setEmail({ input: event.target.value })
    console.log('email :', email.input)
  }

  const passwordInputHandler = (event) => {
    setPassword({ input: event.target.value })
    console.log('pasasword :', password.input)
  }

  // after updating variable values pass it all through an dictionary

  const getInputs = (name, cpf, password, email) => {
    const jsonRequest = {
      name: name.input,
      cpf: cpf.input,
      email: email.input,
      password: password.input
    }

    return jsonRequest
  }

  //api data handler to send the inputs values through api

  const sendBodyReq = (event) => {
    event.preventDefault()
    const options = {
      method: 'POST',
      body: JSON.stringify({
        name: name.input,
        cpf: cpf.input,
        password: '123',
        email: 'test@gmail.com'
      }),
      headers: { 'Content-Type': 'application/json' }
    }
    fetch('http://localhost:3000/api/register', options).then(() => { console.log("form sent") })
  }

  // the values of variables have to be passed through props
  // those props are connected with component children props

  // type submit in the button makes page refresh, turn it off to see and
  // confirm data

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
