import {
  Box
} from '@chakra-ui/react';
import React from 'react'
import InfoNumberCards from '../../components/InfoCards/InfoNumberCards';

export default function HomePage() {
  return (
    <>
      <Box>
        <InfoNumberCards
          title='+100'
          description='Pessoas conectadas à uma instituição' />
      </Box>
    </>
  )
}
