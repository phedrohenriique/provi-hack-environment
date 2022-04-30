import { Box, IconButton, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { RiCloseLine, RiMenu2Fill } from "react-icons/ri";
import style from "../../../styles/menu.module.css"
import CardLoginButtons from "../../CardLoginButtons";
import LinkLocal from "../../LinkLocal";

function MenuMobile() {
    const [Open, setOpen] = useState(false)
    return (
        <Box className={style.mobileMenu} h="100%">
            <Box>
                <IconButton
                    variant=""
                    color="#7ADFA5"
                    fontSize="24"
                    icon={!Open ? <RiMenu2Fill /> : <RiCloseLine />}
                    _focus={{}}
                    onClick={() => {
                        setOpen(!Open);
                    }}
                />
            </Box>

            {Open && <VStack
               
                w="100%"
                h="100%"
                bgColor={"#003B70"}
                position="absolute"              
                left={0}   
                pl="50px"         
                align="flex-start"
                justify="space-evenly"
            >
                <VStack
                 align="baseline"
                >
                    <LinkLocal href="/quemsomos" >Home</LinkLocal>
                    <LinkLocal href="/instituicoes">Instituiçoes</LinkLocal>

                    <LinkLocal href="/parceiras">Empresas</LinkLocal>
                    <LinkLocal href="/register">RePensar</LinkLocal>
                    <LinkLocal href="/instituicoes">ReUtilizar</LinkLocal>
                    <LinkLocal href="/instituicoes">Quero RePassar</LinkLocal>
                    </VStack>
                <CardLoginButtons Ver />
            </VStack>
            }
        </Box>
    )
}

export default MenuMobile;