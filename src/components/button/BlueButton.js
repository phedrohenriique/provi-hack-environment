import React from 'react'
import { Button, Link } from '@chakra-ui/react'

export default function BlueButton({ text, link, width}) {
    const style = {
        color: 'white',
        background: '#003B70',
        fontFamily: 'sans-serif',
        fontWeight: '600',
        borderRadius: '50px'
    }

    return (
        <Link
            href={link ? link : undefined}
            style={{ all: 'unset' }}>
            <Button style={style} width={width}>
                {text}
            </Button>
        </Link>
    )
}
