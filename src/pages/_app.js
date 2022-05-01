import { 
  ChakraProvider,
 } from '@chakra-ui/react'
import '../styles/globals.css'
import Header from "./../components/Header"

function MyApp({ Component, pageProps }) {

  return <>
    <ChakraProvider>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  </>
}

export default MyApp
