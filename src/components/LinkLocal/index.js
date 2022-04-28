import { Box } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

function LinkLocal(props) {
  return (
        <Box {...props}>
            <Link  href={props.href}>{props.children}</Link>
        </Box>
  )
} 

export default LinkLocal