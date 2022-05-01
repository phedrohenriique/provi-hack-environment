import React from 'react'
import { Button, Link } from '@chakra-ui/react'

export default function GreenButton({ text, link, width, children }) {
    const style = {
        color: 'black',
        background: '#7ADFA5',
        fontFamily: 'sans-serif',
        fontWeight: '600',
        borderRadius: '50px'
    }

    return (
        <Link
            href={link ? link : undefined}
            style={{ all: 'unset' }}>
            <Button style={style} width={width}>
            {children}
            </Button>
        </Link>
    )
}
