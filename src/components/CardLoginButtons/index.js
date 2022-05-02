import { Text, Stack, HStack} from '@chakra-ui/react'
import React, {useRef} from 'react'
import LinkLocal from '../LinkLocal'
import BlueButton from "./../Button/BlueButton"
import GreenButton from "./../Button/GreenButton"

function CardLoginButtons({ Hor }) {
    const version = useRef( Hor ? "row" : "column" )
    const [loggedUser, setLoggedUser] = React.useState()

    React.useEffect(()=>{
        // inside here userData is another variable
        const data = JSON.parse(localStorage.getItem('loggedUser'));
        setLoggedUser(data)
    
        },[])

    return (
        <Stack
            align="start"
            spacing={"25px"}
            direction={version.current}
        >
            <GreenButton href="http://localhost:3000/login">
            Entrar
            </GreenButton>

            <BlueButton href="#">
                Cadastrar
            </BlueButton>

            <HStack
                display={Hor ? "none": "block"}
                w="100%"
            >
                <Text
                    fontWeight="400"
                    fontSize="14px"
                    lineHeight="150%"
                    letterSpacing= "-0.022em"
                    color="#FFFFFF"
                    display="inline"
                >
                Não tem uma conta ? 
                </Text>
                <LinkLocal 
                    display="inline-block"
                    fontSize="14px"
                    fontWeight="600"
                    pl="1"
                    textTransform="capitalize"
                href="/register">
                cadastrar
                </LinkLocal>
            </HStack>
            
        </Stack>
    )
}

export default CardLoginButtons