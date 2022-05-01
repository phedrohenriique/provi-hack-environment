import {
    Box,
    Button,
    Center,
    Checkbox,
    FormControl,
    FormLabel,
    Input,
    Text,
    VStack,
    Link,
} from '@chakra-ui/react'
import React from 'react'
import BlueButton from '../Button/BlueButton'

function LoginCard({email, password, inputHandler, data}) {

    ///////////////////////

    //////////////////////

    const style = {
        color: 'black',
        fontFamily: 'sans-serif',
        fontWeight: '800'
    }

    const loginDataCard = data

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        const options = { method: "POST", body: JSON.stringify(loginDataCard) };
        const response = await fetch("api/login", options);
        const data = await response.json();

        const { token } = data;
        console.log(data)
        if (token) {
            alert('success')
            console.log('success')
        }

    }


    return (
        <Box 
        minW={'-moz-fit-content'}
        minH={'-moz-fit-content'}
        >
            <form onSubmit={handleSubmit}>
                <VStack
                    minW={'50%'}
                    minHeight={'50%'}
                    spacing={5}
                    border="2px"
                    padding={10}
                    borderRadius="3xl"
                    className={style.form}
                    gap={5}
                >
                    <Text style={style} fontSize='4xl'>
                        Faça seu Login
                    </Text>
                    <FormControl isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input
                            id="email"
                            name='email'
                            type='email'
                            value={email}
                            onChange={inputHandler}
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Senha</FormLabel>
                        <Input
                            id="senha"
                            name='password'
                            type='password'
                            value={password}
                            onChange={inputHandler}
                        />
                    </FormControl>
                    <Checkbox border='black' alignSelf='flex-start'>lembrar informações </Checkbox>
                    <Box><BlueButton onSubmit={handleSubmit} type='submit' text={'Entrar'} width='md' /></Box>
                    <Text>Não possui conta ? <Link color='teal.500' href='#'>Cadastre-se</Link></Text>
                    <Text>Esqueci minha senha <Link color='teal.500' href='#'>Recuperar</Link></Text>
                    <Text>Ao Fazer Login você concorda com os <Link color='teal.500' href='#'>Termos de Uso</Link></Text>
                </VStack>
            </form>
        </Box>
    )
}

export default LoginCard