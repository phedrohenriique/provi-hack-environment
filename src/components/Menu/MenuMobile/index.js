import { Box, IconButton, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { RiCloseLine, RiMenu2Fill } from "react-icons/ri";
import style from "../../../styles/menu.module.css"

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
               
                w="60%"
                h="100%"
                bgColor="gray"
                position="absolute"
                mt={5}
                left={0}
                spacing={"30px"}
                pt="30px"
            >
                <Link href="#">Quem somos nós?</Link>
                <Link href="#">Empresas parceiras</Link>
                <Link href="#">Instituiçoes cadastradas</Link>
                <Link href="#">Quero me cadastrar</Link>

            </VStack>}
        </Box>
    )
}

export default MenuMobile;