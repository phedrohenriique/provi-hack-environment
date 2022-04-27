import React from 'react'
import { 
    Box, 
    FormLabel, 
    Input 
} from '@chakra-ui/react'

export default function StyledInput({ label, placeholder, type }) {

    // setting variable value and the hook useState to set it
    // same as writing const value = document.
    const [value, setValue] = React.useState({
        input : ''
    })
    // getting the targetted component value defined in component props
    const valueInputHandler = (event)=>{
        setValue(event.target.value)
        return console.log(value)
    }
    


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
                value={value.input}
                onChange={valueInputHandler}
                id={label.toLocaleLowerCase('en-US')}
                ></Input>
            </Box>
        </>
    )
}
