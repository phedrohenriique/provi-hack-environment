import { Text, Stack} from '@chakra-ui/react'
import React from 'react'
import LinkLocal from '../LinkLocal'
import GreenButton from "../Button/GreenButton"
import BlueButton from "../Button/BlueButton"

function CardLoginButtons({ Hor }) {
    
    return (
        <Stack
            align="start"
            spacing={"25px"}
            direction={Hor ? "row": "column"}
        >
            <GreenButton >
            Entrar
            </GreenButton>

            <BlueButton
                
            >
                Sou instituição
            </BlueButton>
        
            
            <Text
                fontWeight="400"
                fontSize="14px"
                lineHeight="150%"
                letter-spacing= "-0.022em"
                color="#FFFFFF"
                display={Hor ? "none": "block"}
            >
            Não tem uma conta ? 
            <LinkLocal 
                display="inline-block"
                fontSize="14px"
                fontWeight="600"
                pl="1"
                textTransform="capitalize"
            href="/register">
             cadastrar
            </LinkLocal>
            </Text>
        </Stack>
    )
}

export default CardLoginButtons