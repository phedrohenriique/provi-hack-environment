import {
    Box,
    Text
} from '@chakra-ui/react'
import React from 'react'
import Image from "next/image"
import ifood from '../../assets/ifood.png'

export default function DiscountCard() {

    const styleDiscount = {
        color: 'white',
        background: '#003B70',
        fontFamily: 'sans-serif',
        fontWeight: '600'
    }

    const leftSideDiscount = {

    }

    return (
        <>
                <Box
                    style={styleDiscount}
                    padding={5}
                    display='flex'
                    flexDirection={'row'}
                    alignContent='center'
                    borderRadius={20}
                    minWidth='400px'
                    gap={5}
                >
                    <Box>
                        <Text fontSize={'4xl'}>10% Off</Text>
                        <Text>Compra no aplicativo </Text>
                        <Text>Expira em: 30 dias</Text>
                    </Box>
                    <Image src={ifood} width='75px' height='75px' />
                    <Box width='75px' heigth='75px' bg='green'></Box>
                </Box>
        </>
    )
}
