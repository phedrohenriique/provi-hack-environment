import { Box, HStack, IconButton, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { RiCloseLine, RiMenu2Fill } from "react-icons/ri";
import style from "../../../styles/menu.module.css"
import LinkLocal from "../../LinkLocal";

function MenuDesktop() {
    return (
        <box className={style.menuDesktop} >
            <HStack 
                spacing="1rem"
            >
                <LinkLocal href="#" >Quem somos nós</LinkLocal>
                <LinkLocal href="#">Empresas parceiras</LinkLocal>
                <LinkLocal href="#">Instituiçoes cadastradas</LinkLocal>
                <LinkLocal href="#" bg="gray" p="2">Quero me cadastrar</LinkLocal>
               
            </HStack>
        </box>

    )
}

export default MenuDesktop;