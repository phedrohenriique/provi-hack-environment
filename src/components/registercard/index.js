import { 
  Box, 
  Button, 
  FormControl } from '@chakra-ui/react'
import React from 'react'
import StyledInput from './StyledInput'

export default function RegisterCard() {

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

  const getInputs = (name,cpf,password,email)=>{
    const jsonRequest = {
      name: name.input,
      cpf: cpf.input,
      email: email.input,
      password: password.input
    }

    return jsonRequest
  }

  //api data handler to send the inputs values through api

  const sendBodyReq = (event)=>{
    event.preventDefault()
    const options = {
      method: 'POST',
      body: JSON.stringify({
        name: name.input,
        cpf: cpf.input,
        password: '123',
        email:'test@gmail.com'
      }),
      headers:{ 'Content-Type': 'application/json' }
    }
    fetch('http://localhost:3000/api/register',options).then(()=>{console.log("form sent")})   
  }

  // the values of variables have to be passed through props
  // those props are connected with component children props

  // type submit in the button makes page refresh, turn it off to see and
  // confirm data

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
        as='form'
      >
        <StyledInput
          label='Nome'
          placeholder='Nome Completo'
          value={name.input}
          setValue={nameInputHandler}
        />
        <StyledInput
          label='CPF'
          placeholder='000000000-00'
          value={cpf.input}
          setValue={cpfInputHandler}
        />
        <StyledInput
          label='Email'
          placeholder='usuario@gmail.com'
          type='email'
          value={email.input}
          setValue={emailInputHandler}
        />
        <StyledInput
          label='Password'
          placeholder='senha123'
          type='password'
          value={password.input}
          setValue={passwordInputHandler}
        />
        <Button
        width='50%'
        alignSelf='center'
        onClick={sendBodyReq}
        type='submit'
        >
          Registre-se
        </Button>
      </FormControl>
    </>
  )
}
