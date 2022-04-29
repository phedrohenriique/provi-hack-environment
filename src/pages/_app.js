import { 
  ChakraProvider,
  Box
 } from '@chakra-ui/react'
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {

  return <>
    <ChakraProvider>
    <Box height='20vh' background='#003B70' textAlign='center'>Header Navigator</Box>
      <Component {...pageProps} />
    </ChakraProvider>
  </>
}

export default MyApp
