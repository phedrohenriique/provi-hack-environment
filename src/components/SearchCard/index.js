import {
  Box,
  Text,
  Button,
  Checkbox
} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { useState, useEffect } from 'react'
import Image from "next/image"
import left from '../../assets/left.png'


export default function SearchCard(/* { title, description, institution, alt, btn1, btn1Text, btn2, btn2Text } */) {




  return (
    <>
      <Box
        border={' 0.5px solid #CCD8E2'}
        boxSizing={'border-box'}
        boxShadow={'0px 5px 30px rgba(0, 0, 0, 0.05)'}
        borderRadius={' 16px 0 0 16px'}
        background={'#FFFFFF'}
        width={'420px'}
        height={'600px'}
        display={'flex'}
        flexDirection={'column'}
      >
        <Box
          display={'flex'}
        >
          <Link href={'/'}>
            <Button
              margin={'40px 0 0 20px'}
              background={'#FFFFFF'} _hover _active
            >
              <Image src={left} />
            </Button>
          </Link>
          <Text
            fontStyle={'normal'}
            fontWeight={'600'}
            fontSize={'22px'}
            lineHeight={'150%'}
            letterSpacing={'-0.022em'}
            color={' #000000'}
            margin={'30px 0 0 20px'}
          >
            Que bom que você se interessou pelo nosso trabalho!
          </Text>
        </Box>
        <Box margin={'20px 0 0 60px'}>
          <Text

            fontWeight={'400'}
            fontSize={'16px'}
            lineHeight={' 150%'}
            letterSpacing={'-0.022em'}
            color={'#000000'}
          >
            Para adquirir benefícios, considere se <Text color={'#33628D'}><Link href={'/register'}>cadastrar.</Link></Text>
          </Text>
          <Box marginTop={'30px'}>
            <Text
              fontStyle={' normal'}
              fontWeight={'600'}
              fontSize={'20px'}
              lineHeight={'150%'}
              display={'flex'}
              alignItems={'center'}
              letterSpacing={'-0.022em'}
            >
              Filtrar instituição
            </Text>
          </Box>
          <Box marginTop={'20px'}>
            <Text
              fontStyle={'normal'}
              fontWeight={'600'}
              fontSize={'20px'}
              lineHeight={'150%'}
            >
              Causas
            </Text>
            <Box
              display={'flex'}
              flexDirection={'column'}
            >
              <Checkbox border='black' >Idosos</Checkbox>
              <Checkbox border='black' >Social (campanhas, escolas, igrejas, etc)</Checkbox>
              <Checkbox border='black' >Meio-ambiente</Checkbox>
              <Checkbox border='black' >Animais</Checkbox>
            </Box>
          </Box>
          <Box marginTop={'60px'}>
            <Text
              fontStyle={'normal'}
              fontWeight={'600'}
              fontSize={'20px'}
              lineHeight={'150%'}
            >
              Tipo de doação
            </Text>
            <Box
              display={'flex'}
              flexDirection={'column'}
            >
              <Checkbox border='black' >Recicláveis</Checkbox>
              <Checkbox border='black' >Roupas</Checkbox>
              <Checkbox border='black' >Móveis</Checkbox>
              <Checkbox border='black' >Livros</Checkbox>
            </Box>
          </Box>

        </Box>
      </Box>
    </>
  )
}