import {HStack, Box} from "@chakra-ui/react";
import style from "../../../styles/menu.module.css"
import CardLoginButtons from "../../CardLoginButtons";
import LinkLocal from "../../LinkLocal";

function MenuDesktop() {
    return (
        <Box className={style.menuDesktop} >
            <HStack 
                spacing="1rem"
            >
                <LinkLocal href="/quemsomos" >Quem somos nós</LinkLocal>
                <LinkLocal href="/parceiras">Empresas parceiras</LinkLocal>
                <LinkLocal href="/instituicoes">Instituiçoes cadastradas</LinkLocal>
                <CardLoginButtons Hor />
            </HStack>
        </Box>

    )
}

export default MenuDesktop;