import react from "react"
import Image from "next/image"
import world from '../../assets/sustainableworld.png'
import {
  Box,
  Text
} from "@chakra-ui/react"
import LoginCard from "../../components/Logincard"
import React from 'react'

export default function LoginPage() {

    //////////////////////////
    // local storage simple logic for test

    const userOne = {
      email: 'pedro@gmail.com',
      password: '123'
    }
  
    React.useEffect(()=>{
    localStorage.setItem('users', JSON.stringify(userOne));

    const userData = JSON.parse(localStorage.getItem('users'));
    console.log('LocalStorage :',userData);

    },[])

    //////////////////////
    // Login Data getting inputs information

    const [loginData, setLoginData ] = React.useState({
      email:'',
      password:''
    }) 
    // getting component values(prop) based on their name (prop)
    const handlerLoginStorage = (event)=>{
      const {name, value} = event.target
      setLoginData({ ...loginData, [name]: value })
      console.log(loginData)
    }

    ////////////////////////

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
          <LoginCard 
          email={loginData.email} 
          password={loginData.password} 
          inputHandler={handlerLoginStorage} 
          data={loginData}
          />
        </Box>
      </>
    )
  }