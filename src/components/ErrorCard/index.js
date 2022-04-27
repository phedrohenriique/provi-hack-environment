import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import style from "./../../styles/LetterJump.module.css"

function ErrorCard() {
  return (
    <VStack
      border="2px"
      borderRadius={"3xl"}

      p={5}

      w="sm"
      h="sm"

      justify={"space-between"}
    >
      <Text>Endereço nao encontrado</Text>
      <HStack>
        <Text fontWeight="bold" fontSize="xxx-large" className={style.letterUP}>4</Text>
        <Text fontWeight="bold" fontSize="xxx-large" className={style.letterDown}>0</Text>
        <Text fontWeight="bold" fontSize="xxx-large"className={style.letterUP}>4</Text>
      </HStack>
      <HStack
        w={"100%"}
        justify={"space-between"}
      >
        <Button>Login</Button>
        <Button>Sair</Button>
      </HStack>
    </VStack>
  )
}

export default ErrorCard