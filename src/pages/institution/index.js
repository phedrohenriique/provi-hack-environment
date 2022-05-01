import {
  Box,
  Text
} from '@chakra-ui/react';
import React from 'react'
import Image from "next/image"
import InstitutionPageCard from '../../components/InstitutionPageCard';
import ilus101 from '../../assets/ilus101.png'
import group from '../../assets/group.png'
import dogBlue from '../../assets/dogBlue.png'


export default function InstitutionPage() {

  const textInstitution = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  const email = 'nome@instituicao.com.br';
  const phone = '(99)99999-9999';
  const address = 'Rua taltaltal, número 00 - São Paulo - SP';
  const InstitutionName = 'Nome da Instituição';
  return (

    <>
      <Box
        minWidth={'10vw'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Box>
          <InstitutionPageCard instImage={group} textInstitution={textInstitution} email={email} phone={phone} address={address} InstitutionName={InstitutionName} btn={dogBlue} btnText={'Animal'} />
        </Box>
        <Box>
          <Image src={ilus101} width={'280px'} height={'777px'} marginLeft={'20px'} />
        </Box>
      </Box>
    </>
  )
}