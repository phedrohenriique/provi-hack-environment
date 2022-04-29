import React from 'react'
import { Button } from '@chakra-ui/react'

export default function GreenButton({text, link}) {
    const style = {
        color: 'black',
        background: '#7ADFA5',
        fontFamily: 'sans-serif',
        fontWeight: '600',
        borderRadius: '50px'
    }
    
    return (
        
            <Button style={style} Link={link ? link: ''}>
                {text}
            </Button>
        
    )
}
