import React from 'react'
import {
    Box,
    Text,
    Progress,
    Button
} from '@chakra-ui/react'

export default function UserInterface({ name }) {

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

    let [progress, setProgress] = React.useState(0)

    if (progress > 100) {
        setProgress(0)
    }

    return (
        <>
            <Box padding={3} width={'fit-content'}>
                <Text style={styleName} fontSize={'6xl'}>{name}</Text>
                <Box display={'flex'} flexDirection={'column'} gap={3}>
                    <Text fontSize={'2xl'} style={styleTitle}>Seu Progresso {`${progress} %`}</Text>
                    <Box border={'1px solid blue'} borderRadius={50}>
                        <Progress border={'1px solid white'} borderRadius={50} value={progress} />
                    </Box>
                    <Text fontSize={'sm'} style={styleText}>Após completar a barra você desbloqueia seu Cupom</Text>
                </Box>
                <Button colorScheme={'blue'} onClick={() => { setProgress(progress + 5) }}>Bar Increase</Button>
            </Box>

        </>
    )
}
