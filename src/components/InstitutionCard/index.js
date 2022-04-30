import {
    Box,
    Text
} from '@chakra-ui/react'
import React from 'react'
import Image from "next/image"

export default function InstitutionCard({ title, description }) {

    const style = {
        color: 'black',
        fontFamily: 'sans-serif',
        fontWeight: '600'
    }

    return (
        <>
            <Box minWidth={'10vw'}>
                <Box></Box>
                <Box display={'flex'} flexDirection='column' justifyContent={'flex-start'}>
                    <Text style={style} fontSize={'4xl'}>{title}</Text>
                    <Text style={style}>{description}</Text>
                </Box>
            </Box>
        </>
    )
}
