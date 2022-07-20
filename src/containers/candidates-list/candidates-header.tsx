import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import PageTitle from '../../components/headings/page-title'
import { BaseButton } from '../../components/buttons/button'
import Link from 'next/link'

type CandidatesHeaderProps = {}

const CandidatesHeader = ({ }: CandidatesHeaderProps) => {


  const renderTitle = () => {
    return (
      <Box>
        <PageTitle text='Candidates' />
        <Text
          mt='8px'
          fontSize='14px'
          fontWeight='400'
          color='brand.grey400'
        >
          40 total candidates
        </Text>
      </Box>
    )
  }

  const renderActionButtons = () => {
    return (
      <BaseButton
        text='Shake the list'
        color='brand.red'
        fontWeight='400'
      />
    )
  }
  return (
    <Box
      borderBottom='2px solid'
      borderColor='brand.grey200'
      pb='10px'
      display='flex'
      justifyContent='space-between'
    >
      {renderTitle()}
      {renderActionButtons()}
    </Box>
  )
}

export default CandidatesHeader