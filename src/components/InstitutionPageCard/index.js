import {
  Box,
  Text,
  Button,
} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import left from '../../assets/left.png'


export default function InstitutionPageCard({ instImage, textInstitution, email, phone, address, InstitutionName, btn, btnText }) {
  const listStyle = {
    display: 'flex',
    margin: '0 0 10px 60px',
    fontWeight: '600',
    fontSize: ' 20px',
    lineHeight: '150%',
    color: '#000000',

  }
  return (
    <>
      <Box
        margin={'40px 20px 40px 0'}
        background={'#FFFFFF'}
        border={' 0.5px solid #CCD8E2'}
        boxSizing={'border-box'}
        boxShadow={'0px 5px 30px rgba(0, 0, 0, 0.05)'}
        borderRadius={'16px'}
        width={'780px'}
        height={'1080px'}
      >
        <Box >
          <Box
            margin={'30px 0 20px 10px'}
            display={'flex'}
            alignItems={'center'}

          >
            <Link href={'/search'}>
              <Button background={'#FFFFFF'} _hover _active>
                <Image src={left} />
              </Button>
            </Link>

            <Text
              fontWeight={'600'}
              fontSize={'32px'}
              line-height={'150%'}
              color={'#003B70'}
            >
              {InstitutionName}
            </Text>
          </Box>
          <Box display={'flex'} justifyContent={'center'} >
            <Image src={instImage} alr={'group of people'} width={'660px'} height={'482px'} />
          </Box>
          <Text
            color={'#003B70'}
            fontWeight={'700'}
            fontSize={'20px'}
            lineHeight={'150%'}
            margin={'18px 0 10px 60px'}
          >Sobre nós</Text>
          <Text
            color={'#000000'}
            fontWeight={'400'}
            fontSize={'16px'}
            lineHeight={'150%'}
            margin={'0 60px 10px 60px'}
            letterSpacing={' -0.022em'}
          >
            {textInstitution}
          </Text>
          <Text style={listStyle} >
            E-mail: <Text marginLeft={'50px'} fontWeight={'400'}>{email}</Text>
          </Text >
          <Text style={listStyle} >
            Telefone: <Text marginLeft={'30px'} fontWeight={'400'}>{phone}</Text>
          </Text>
          <Text style={listStyle} >
            Endereço: <Text marginLeft={'22px'} fontWeight={'400'}>{address}</Text>
          </Text>
        </Box>
        <Box marginTop={'30px'}>
          <Text
            fontWeight={'600'}
            fontSize={'20px'}
            lineHeight={'150%'}
            display={'flex'}
            alignItems={'center'}
            letterSpacing={'-0.022em'}
            color={'#000000'}
            margin={'0 0 0 60px'}
          >
            Causas que apoiamos:
          </Text>
          <Box
            margin={'0 60px 0 60px'}
            display={'flex'}
            justifyContent={'space-between'}
          >
            <Button
              marginRight={'14px'}
              padding={'5px 8px'}
              background={'#FFFFFF'}
              border={'2px solid #003B70'}
              boxSizing={'border-box'}
              borderRadius={'16px'}
            >
              <Image src={btn} marginRight={'8px'} /> {btnText}
            </Button>
            <Button
              marginRight={'14px'}
              padding={'5px 8px'}
              background={'#003B70'}
              borderRadius={' 16px'}
              color={'#FFFFFF'}
              _hover={{ background: '#33628D' }}
            >
              Falar com instituição
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}