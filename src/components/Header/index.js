import {HStack, Image } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import MenuDesktop from '../Menu/MenuDesktop'

import MenuMobile from '../Menu/MenuMobile'

function Header() {
    return (
        <HStack
            p={5}
            justify="space-between"
            alignItems="center"
            h="80px"
            bgColor={"#003B70"}
        >
            <MenuMobile />
            
            <Link href="/home" >
                <Image maxH="100%" src='assets/logo.png' alt="logo" cursor={"pointer"}/>
            </Link>
            
            <MenuDesktop />
        </HStack>
    )
}

export default Header