import {
  Box,
} from '@chakra-ui/react';
import React from 'react'
import InstitutionCard from '../../components/InstitutionCard'
import SearchCard from '../../components/SearchCard'
import lightOn from '../../assets/lightOnGreen.png'
import dogGreen from '../../assets/dogGreen.png'
import clover from '../../assets/clover.png'
import group from '../../assets/group.png'



export default function InstitutionPage() {
  const title = 'Nome da instituição'
  const description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries  lorem50'
  const alt = 'Kids holding in their hands a clover'

  return (
    <>
      <Box
        display={'flex'}
        alignItems={'flex-start'}
        justifyContent={'center'}
        marginTop={'40px'}
      >
        <SearchCard />
        <Box
          border={'0.5px solid #CCD8E2'}
          boxSizing={'border-box'}
          boxShadow={'0px 5px 30px rgba(0, 0, 0, 0.05)'}
          borderRadius={'16px'}
          width={'900px'}
          height={'800px'}

        >
          <Box marginLeft={'35px'}>
            <InstitutionCard title={title} description={description} institution={group} alt={alt} btn1={dogGreen} btn1Text={'ANIMAL'} btn2={lightOn} btn2Text={'ONG'} />
            <InstitutionCard title={title} description={description} institution={group} alt={alt} btn1={dogGreen} btn1Text={'ANIMAL'} btn2={lightOn} btn2Text={'ONG'} />
          </Box>
        </Box>
      </Box>
    </>
  )
}