import { Center } from '@chakra-ui/react'
import React from 'react'
import ErrorCard from '../components/ErrorCard'

function errorPage() {
  return (
    <Center h="100vh">
        <ErrorCard />
    </Center>
  )
}

export default errorPage