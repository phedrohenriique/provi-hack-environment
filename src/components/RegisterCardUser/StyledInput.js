import React from 'react'
import { 
    Box, 
    FormLabel, 
    Input} from '@chakra-ui/react'

export default function StyledInput({ label, placeholder, type, value, setValue}) {

    // const [value, setValue] = React.useState({input : ''})
    // const valueInputHandler = (event)=>{setValue({input: event.target.value})
    // props are passed through parent through variables
    // in this case value and setValue are the variable in the parent and the
    // handler function

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
                value={value}
                onChange={setValue}
                id={label.toLocaleLowerCase('en-US')}
                ></Input>
            </Box>
        </>
    )
}
