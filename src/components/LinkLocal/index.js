import { Box } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

function LinkLocal(props) {
  
  return (
        <Box 
          fontFamily='League Spartan' 
          fontStyle= "normal"
          fontWeight="400"
          fontSize="24px"
          lineHeight= "150%"
          letterSpacing="-0.022em"
          color="#fff"
          cursor={"pointer"}
          {...props}>
            <Link  href={props.href}>{props.children}</Link>
        </Box>
  )
} 

export default LinkLocal