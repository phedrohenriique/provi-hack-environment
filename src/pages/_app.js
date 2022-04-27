import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import RegisterCard from '../components/registercard'
function MyApp({ Component, pageProps }) {

  return <>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  </>
}

export default MyApp
