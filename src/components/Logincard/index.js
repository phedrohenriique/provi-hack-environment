import { Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, IconButton, Input, InputGroup, InputRightElement, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import style from "../../styles/login.module.css"
import { RiEyeCloseLine, RiEyeFill } from "react-icons/ri"
import { useRouter } from 'next/router'

function LoginCard() {
    const [isErrorEmail, setIsErrorEmal] = React.useState(false)
    const [message, setMessage] = React.useState({text: "", color: "red"})
    const [isLoading, setIsLoading] = React.useState(false);
    const [isErrorPassword, setIsErrorPassword] = React.useState(false)
    const [login, setLogin] = React.useState({
        email: "",
        senha: ""
    })

    const [show, setShow] = React.useState(false);
    const Router = useRouter();
    
    const handleInputChange = (evt) => {
        const { name, value } = evt.target;
        setLogin({ ...login, ...{ [name]: value } });
    }
    const handleEyeClick = () => {
        setShow(!show);
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        
        setIsLoading(true);
        const options = {method: "POST", body: JSON.stringify( login)};

        const response = await fetch("api/login", options);
        const data = await response.json(); 

        const {token} = data;
        
        if(token){
            localStorage.setItem("Token",JSON.stringify(token));
            Router.push({
              pathname: "/home",
              query: { user: data },
            })
            return setMessage({text: "success", color:"green"} );
        }

        setMessage({text: data.message, color:"red"} );
        setIsLoading(false);
    }


    return (
        <form onSubmit={handleSubmit}>
            <VStack
                spacing={5}

                border="2px"
                padding={10}
                borderRadius="3xl"
                className={style.form}                
            >
                <Text
                    fontWeight="bold"
                    fontSize="3xl"
                    letterSpacing={3}
                    textTransform="uppercase"
                >
                    Login
                </Text>
                {<Text
                    color={message.color}                    
                >
                    {message.text}
                </Text>}
                <FormControl isInvalid={isErrorEmail} isRequired>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Input
                        id="email"
                        name='email'
                        type='email'
                        value={login.email}
                        onChange={handleInputChange}
                    />
                    {!isErrorEmail ? (
                        <FormHelperText>
                            Entre com o email registrado
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage>{isErrorEmail}</FormErrorMessage>
                    )}
                </FormControl>
                <FormControl
                    isInvalid={isErrorPassword}
                    isRequired

                >
                    <FormLabel htmlFor='senha'>Senha</FormLabel>
                    <InputGroup>
                        <Input
                            id="senha"
                            name='senha'
                            type={show ? 'text' : 'PASSWORD'}
                            value={login.senha}
                            onChange={handleInputChange}
                        />

                        <InputRightElement
                            
                        >
                            <IconButton
                                variant=""
                                fontSize='15px'
                                icon={show ? <RiEyeFill /> : <RiEyeCloseLine />}
                                onClick={ handleEyeClick }
                                _focus={{}}
                            />
                        </InputRightElement>
                    </InputGroup>

                    {!isErrorPassword ? (
                        <FormHelperText>
                            Entre com sua senha
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage>Email is required.</FormErrorMessage>
                    )}
                </FormControl>

                <FormControl
                    textAlign={"end"}
                >
                    <Button type='submit' isLoading={isLoading}>
                        Entrar
                    </Button>
                </FormControl>

            </VStack>
        </form>
    )
}

export default LoginCard