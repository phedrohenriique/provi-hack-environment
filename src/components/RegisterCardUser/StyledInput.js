import React from 'react'
import { 
    Box, 
    FormLabel, 
    Input 
} from '@chakra-ui/react'

export default function StyledInput({ label, placeholder, type }) {
    return (
        <>
            <Box 
            display='flex'
            flexDirection='column'
            justifyContent='flex-start'
            paddingX='2%'
            height='fit-content'
            >
                <FormLabel>{label}:</FormLabel>
                <Input 
                bg='white' 
                type={type ? type : 'text'} 
                placeholder={placeholder ? placeholder : ''}
                _placeholder={{opacity: 0.8,color: 'gray'}}
                borderRadius='50px'
                border='2px solid #003B70'
                ></Input>
            </Box>
        </>
    )
}
