import {
  Box,
  Text
} from '@chakra-ui/react';
import React from 'react'
import Image from "next/image"
import InfoNumberCards from '../../components/InfoCards/InfoNumberCards';
import image1 from '../../assets/ilus23worldbloom.png'

export default function HomePage() {

  const styleTitle = {
    color: '#003B70',
    fontFamily: 'sans-serif',
    fontWeight: '800'
  }

  const styleText = {
    color: 'black',
    fontFamily: 'sans-serif',
    fontWeight: '800'
  }

  return (
    <>
      <Box
        display='flex'
        flexDirection='column'

      >
        <Box
          display='flex'
          flexDirection='row'
          alignContent='center'
          justifyContent='space-around'
          paddingY={10}
        >
          <Box
            display='flex'
            flexDirection='column'
            gap={5}
            width='40%'
          >
            <Text fontSize={'4xl'} style={styleTitle}>
              O que é a RePensa?
            </Text>
            <Text style={styleText}>
              Somos uma startup com foco no Meio Ambiente e no Combate a Desigualdade Social.
              Nosso Hub é um facilitador que conecta pessoas.
              Observamos a dificuldade de acesso a informação quando queremos descobrir alguma instituição local, principalmente a existência de Associações de Reciclagem que fazem
              o serviço de coleta de materiais para reciclagem e tiram disto sua renda econômica. Nesse âmbito a maioria das pessoas por falta de informação não fazem a separação do lixo seco
              que acabam sendo destinado juntamente com lixo orgânico e outros resíduos.
              Nosso intuito é servir
            </Text>
          </Box>
          <Image width='500px' height='500px' src={image1} />

        </Box>
        <Box
          display='flex'
          flexDirection='row'
          alignContent='center'
          justifyContent='space-around'
          gap={5}
        >
          <InfoNumberCards title='4°' description='Brasil é o país que mais produz lixo no mundo' />
          <InfoNumberCards title='+13%' description='Do lixo seco é destinadoa reciclagem' />
          <InfoNumberCards title='390mil' description='Pessoas vivem da coletade materiais recicláveis' />
        </Box>
      </Box>
    </>
  )
}
