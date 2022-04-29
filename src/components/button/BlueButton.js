import React from 'react'
import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function BlueButton({ text, link }) {
    const style = {
        color: 'white',
        background: '#003B70',
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
