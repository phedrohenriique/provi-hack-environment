import { Badge, Box, createIcon, Icon, IconButton, Image, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'

const dataCategory = {
    saude: {
        src: "./assets/Heart.png",
        text: "Saude"
    },
    animal: {
        text: "animal",
        src: "./assets/dog.svg"
    },
    crianca: {
        text: "criança",
        src: "assets/Teddy_Bear.png"
    },
    idosos: {
        text: "idosos",
        src: "./assets/Old_Man.png"
    }
}

const Categoria = ({ type, size}) => {
    
    const Category = styled.div`
        border: 2px solid #003B70;
        color: #003B70;
        border-radius: 16px;
        font-family: League Spartan;
        font-style:normal;
        font-weight: 600;
        font-size: ${size/4}rem;
        line-height: 150%;

        display: flex;
        align-items: center;
        gap: 8px;
        letter-spacing: 0.022em;
        padding: 5px 8px;
        width: fit-content;

        text-transform: uppercase;
`



    const { text, src } = dataCategory[type] ?? { text: "", src: "" };

    return (
        <Category>
            <Image h={size}  w={size} src={src} alt="icone" />
            <Text>{text}</Text>
        </Category>

    )
}

function teste() {
    return (
        <div>
            <Categoria type="crianca"   size={5}/>
            <Categoria type="animal"    size={4}/>
            <Categoria type="idosos"    size={3}/>
            <Categoria type="saude"     size={2}/>
        </div>
    )
}

export default teste;