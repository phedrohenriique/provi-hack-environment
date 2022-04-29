import { Box, IconButton, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { RiCloseLine, RiMenu2Fill } from "react-icons/ri";
import style from "../../../styles/menu.module.css"
import LinkLocal from "../../LinkLocal";

function MenuMobile() {
    const [Open, setOpen] = useState(false)
    return (
        <Box className={style.mobileMenu} h="100%">
            <Box>
                <IconButton
                    variant=""
                    
                    fontSize="24"
                    icon={!Open ? <RiMenu2Fill /> : <RiCloseLine />}
                    _focus={{}}
                    onClick={() => {
                        setOpen(!Open);
                    }}
                />
            </Box>

            {Open && <VStack
               
                w="70%"
                h="100%"
                bgColor="gray"
                position="absolute"
                mt={5}
                left={0}
                spacing={"30px"}
                pt="30px"
                align={"center"}
            >
                <LinkLocal href="/quemsomos" >Quem somos nós</LinkLocal>
                <LinkLocal href="/parceiras">Empresas parceiras</LinkLocal>
                <LinkLocal href="/instituicoes">Instituiçoes cadastradas</LinkLocal>
                <LinkLocal href="/register">Quero me cadastrar</LinkLocal>

            </VStack>}
        </Box>
    )
}

export default MenuMobile;