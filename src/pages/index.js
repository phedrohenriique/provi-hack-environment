import react from "react"
import {
  Box,
  Text
} from "@chakra-ui/react"

export default function Home() {
  const style = {
    color: 'blue.600'
  }

  const styleText = {
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    color: 'white'
  }

  return (
    <>
      <Box
        display='flex'
        flexDirection='column'
        gap={3}>
        <Box
          minH='50vh'
          minW='90vw'
          bg={style.color}
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          borderRadius={5}
        >
          <Text
            style={styleText}
          >Titulo</Text>
          <Text
            paddingX='5%'
            style={styleText}
          >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of</Text>

        </Box>
        <Box
          gap={3}
          borderRadius={5}
          bg={style.color}
          minWidth='90vw'
          display='flex'
          flexDirection='row'
        >
          <Box
            borderRadius={70}
            bg='red'
            width='100px'
            alignItems='center'
            justifyContent='center'
          ></Box>
          <Text
            style={styleText}
            fontSize='xl'
          >+ 100 Pessoas Conectadas a uma Instituição</Text>
        </Box>
        <Box
          gap={3}
          borderRadius={5}
          bg={style.color}
          minWidth='90vw'
          display='flex'
          flexDirection='row'
          justifyContent='flex-end'
        >
          <Text
            style={styleText}
            fontSize='2xl'
            alignContent='flex-end'
          >+50 Insituições Cadastradas</Text>
          <Box
            borderRadius={70}
            bg='red'
            width='100px'
            alignItems='center'
            justifyContent='center'
          ></Box>
        </Box>
        <Box
          gap={3}
          borderRadius={5}
          bg={style.color}
          minWidth='90vw'
          display='flex'
          flexDirection='row'
        >
          <Box
            borderRadius={70}
            bg='red'
            width='100px'
            alignItems='center'
            justifyContent='center'
          ></Box>
          <Text
            style={styleText}
            fontSize='xl'
          >+ 20 Empresas Apoiadoras</Text>
        </Box>
      </Box>
    </>
  )
}
