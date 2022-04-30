import { Box,VStack ,HStack, Text, Stack} from '@chakra-ui/react'
import React from 'react'
import LinkLocal from '../LinkLocal'

function CardLoginButtons({ Hor }) {
    
    return (
        <Stack
            align="start"
            spacing={"15px"}
            direction={Hor ? "row": "column"}
        >
            <LinkLocal
                href="/login"
                bg="#7ADFA5"
                box-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                borderRadius="16px"
                padding="5px 24px"
                fontSize="20px"
                fontWeight="600"
                color="black"
            >
                Entrar
            </LinkLocal>
            <LinkLocal
                href="/loginInstituicao"
                border="1px solid #7ADFA5"
                box-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                borderRadius="16px"
                padding="5px 24px"
                fontSize="20px"
                fontWeight="600"
                color="#fff"
            >
                Sou instituição
            </LinkLocal>
        
            
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