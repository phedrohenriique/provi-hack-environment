import React from 'react'
import {
    Box,
    Text,
    Progress,
    Button
} from '@chakra-ui/react'

export default function ProgressDiscount({ name, value }) {

    const styleName = {
        color: '#003B70',
        fontFamily: 'sans-serif',
        fontWeight: '600'
    }

    const styleTitle = {
        color: '#003B70',
        fontFamily: 'sans-serif',
        fontWeight: '600'
    }

    const styleText = {
        color: 'black',
        fontFamily: 'sans-serif',
        fontWeight: '600'
    }

    return (
        <>
            <Box width={'fit-content'}>
                <Text style={styleName} fontSize={'6xl'}>{name}</Text>
                <Box display={'flex'} flexDirection={'column'} gap={3}>
                    <Text fontSize={'2xl'} style={styleTitle}>Seu Progresso {`${value} %`}</Text>
                    <Box border={'1px solid blue'} borderRadius={50}>
                        <Progress border={'1px solid white'} borderRadius={50} value={value} />
                    </Box>
                    <Text fontSize={'sm'} style={styleText}>Após completar a barra você desbloqueia seu Cupom</Text>
                </Box>
                
            </Box>

        </>
    )
}