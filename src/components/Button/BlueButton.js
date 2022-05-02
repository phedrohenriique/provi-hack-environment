import React, {useRef} from 'react'
import { Button, Link } from '@chakra-ui/react'

export default function BlueButton({ link, width,children}) {
    const style = useRef({
        color: 'white',
        background: 'black',
        fontFamily: 'sans-serif',
        fontWeight: '600',
        borderRadius: '50px'
    })

    return (
        <Link
            href={link ? link : undefined}
            style={{ all: 'unset' }}>
            <Button style={style.current} width={width}>
                {children}
            </Button>
        </Link>
    )
}
