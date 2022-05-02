import {HStack, Box,Text} from "@chakra-ui/react";
import style from "../../../styles/menu.module.css"
import CardLoginButtons from "../../CardLoginButtons";
import LinkLocal from "../../LinkLocal";
import {useState,useEffect} from "react"
function MenuDesktop() {
    const [User, setUser] = useState({})

        useEffect(() => {
            const data = JSON.parse( localStorage.getItem("loggedUser") );

        console.log("user", data);
            setUser(   data )
        }, [])
        console.log(User)
    return (
        <Box className={style.menuDesktop} >
            <HStack 
                spacing="1rem"
            >
                <LinkLocal href="/quemsomos" >Quem somos nós</LinkLocal>
                <LinkLocal href="/parceiras">Empresas parceiras</LinkLocal>
                <LinkLocal href="/instituicoes">Instituiçoes cadastradas</LinkLocal>
                {User.login? <LinkLocal href="#" textTransform="uppercase">{User.name}</LinkLocal> : <CardLoginButtons Hor />}
            </HStack>
        </Box>

    )
}

export default MenuDesktop;