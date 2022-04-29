import react from "react"
import Image from "next/image"
import world from '../assets/sustainableworld.png'
import {
  Box,
  Text
} from "@chakra-ui/react"
import LoginCard from "../components/Logincard"

export default function Home() {
  const style = {
    color: 'blue.600'
  }

  const styleText = {
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    color: 'white'
  }

  return (
    <>
      <Box 
      marginY='2%'
      display='flex'
      flexDir='row'
      alignItems='center'
      justifyContent='space-around'
      gap={5}
      >
        <Image 
        src={world} 
        width='500px'
        height='500px' 
        layout="fixed"
        />
        <LoginCard />
      </Box>
    </>
  )
}
