import React from 'react'
import { Box, FormControl, FormLabel, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react'

export default function StyledInput({ label, placeholder, type }) {
    return (
        <>
            <Box 
            display='flex'
            flexDirection='column'
            justifyContent='flex-start'
            paddingX='4%'
            >
                <FormLabel>{label}</FormLabel>
                <Input 
                bg='white' 
                type={type ? type : 'text'} 
                placeholder={placeholder ? placeholder : ''}
                _placeholder={{opacity: 0.8,color: 'gray'}}
                ></Input>
            </Box>
        </>
    )
}
