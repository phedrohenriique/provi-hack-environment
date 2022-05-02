import react from "react"
import Image from "next/image"
import world from '../../assets/sustainableworld.png'
import {
  Box,
  Text
} from "@chakra-ui/react"
import LoginCard from "../../components/Logincard"
import React from 'react'
import { useRouter } from "next/router"

export default function LoginPage() {
  const router = useRouter()
    //////////////////////////
    // local storage simple logic for test
    const [storedData, setStoredData] = React.useState()

    const users = [{
      email: 'pedro@gmail.com',
      password: '123',
      login: false
    },
    {
      email: 'alisson@gmail.com',
      password: '123',
      login: false
    },
    {
      email: 'rafael@gmail.com',
      password: '123',
      login: false
    },
  ]
  
    React.useEffect(()=>{
    // inside here userData is another variable
    const userDataRequested = JSON.parse(localStorage.getItem('users'));
    setStoredData(userDataRequested)

    },[])

    //////////////////////
    // Login Data getting inputs information
    const [loginData, setLoginData ] = React.useState({
      email:'',
      password:'',
      login:''
    }) 

    // getting component values(prop) based on their name (prop)
    const handlerLoginStorage = (event)=>{
      const {name, value} = event.target
      setLoginData({ ...loginData, [name]: value })
      console.log(loginData)
    }

    console.log('localStorage :', storedData)
    console.log('loginData :', loginData)

    const handlerLoginOnline = ()=>{
      console.log('localStorage :', storedData)
      console.log('loginData :', loginData)
      console.log('i was clicked')

      const user = storedData.find((value)=>{
        return value.email == loginData.email && value.password == loginData.password
      })

      if( user == undefined){
        console.log({message: 'error user not found'})
      }

      else {
        router.push(`http://localhost:3000/home`)
        user.login = true
        console.log('logged user', user.email, 'on :', user.login)
        console.log(user)
        localStorage.setItem("loggedUser", JSON.stringify(user))
      }
      
      
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
          onClick={handlerLoginOnline}
          />
        </Box>
      </>
    )
  }