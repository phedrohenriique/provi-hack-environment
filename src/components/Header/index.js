import { Box, HStack, IconButton, Image } from '@chakra-ui/react'
import React from 'react'
import { RiEyeFill } from 'react-icons/ri'
import MenuDesktop from '../Menu/MenuDesktop'

import MenuMobile from '../Menu/MenuMobile'

function Header() {
    return (
        <HStack
            bgColor="#fff"
            p={5}
            justify="space-between"
            alignItems="center"
        >
            <MenuMobile />
            <Box w="50px" >
                <Image w="100%" src='assets/logo_preta.png' alt="logo" />
            </Box>
            <MenuDesktop />
        </HStack>
    )
}

export default Header