import {HStack} from "@chakra-ui/react";
import style from "../../../styles/menu.module.css"
import LinkLocal from "../../LinkLocal";

function MenuDesktop() {
    return (
        <box className={style.menuDesktop} >
            <HStack 
                spacing="1rem"
            >
                <LinkLocal href="/quemsomos" >Quem somos nós</LinkLocal>
                <LinkLocal href="/parceiras">Empresas parceiras</LinkLocal>
                <LinkLocal href="/instituicoes">Instituiçoes cadastradas</LinkLocal>
                <LinkLocal 
                    href="/login" 
                    bg= "#7ADFA5"
                    box-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                    borderRadius="16px"
                    padding="5px 24px"
                    fontSize="20px"
                    color="black"
                    >
                        Entrar
                </LinkLocal>
            </HStack>
        </box>

    )
}

export default MenuDesktop;