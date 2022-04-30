import React from 'react'
import {
    Box,
    Text
} from '@chakra-ui/react'

export default function InfoNumberCards({title, description}) {
    const style = {
        color: '#003B70',
        fontFamily: 'sans-serif',
        fontWeight: '600'
    }

    return (
        <Box
            minWidth='30vw'
            minHeigth='30vh'
            background='#7ADFA5'
            display='flex'
            flexDirection='column'
            borderRadius='md'
            padding='5%'
        >
            <Text style={style} fontSize='7xl'>{title}</Text>
            <Text style={style} fontSize='xl'>{description}</Text>
        </Box>
    )
}
