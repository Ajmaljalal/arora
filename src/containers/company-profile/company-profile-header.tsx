import React from 'react'
import { Avatar, Box, HStack, Text, VStack } from '@chakra-ui/react'
import PageTitle from '../../components/headings/page-title'
import { BaseButton } from '../../components/buttons/button'
import logo from '../../../public/assets/lark-logo.png'
import Link from 'next/link'
import FileUpload from '../../components/form/file-upload'


type CompanyProfileHeaderProps = {
  company: any
}

const CompanyProfileHeader = ({ company }: CompanyProfileHeaderProps) => {
  if (!company) {
    return null
  }

  const renderTitle = () => {
    return (
      <VStack alignItems='flex-start'>
        <HStack spacing={3}>
          <Avatar
            size='lg'
            name='Uber'
            // src={logo.src}
            cursor='pointer'
          // bg='transparent'
          />
          <Box>
            <PageTitle text={company.name} />
            {renderCompanyWebUrl()}
          </Box>
        </HStack>
      </VStack>
    )
  }

  const renderCompanyWebUrl = () => {
    return (
      <a target='_blank' href={company.websiteUrl}>
        <Text color='brand.grey400' width='fit-content' _hover={{ color: 'brand.primary', fontWeight: '600' }}>{company.websiteUrl}</Text>
      </a>
    )
  }

  const renderActionButtons = () => {
    return (
      <HStack spacing={2}>
        {/* <Link href={`/profiles/company/${company.id}`} passHref>
          <a target='_blank'>
            <BaseButton text='Public view' color='brand.primary' outlined borderColor='brand.grey300' />
          </a>
        </Link> */}
        <BaseButton text='Edit' color='brand.white' bg='brand.primary' borderColor='brand.grey300' />
        <FileUpload
          acceptedFileTypes="image/*"
          onChange={(file) => console.log(file)}
        />
      </HStack>
    )
  }
  return (
    <Box
      borderColor='brand.grey200'
      mb='24px'
      display='flex'
      justifyContent='space-between'
    >
      {renderTitle()}
      {renderActionButtons()}
    </Box>
  )
}

export default CompanyProfileHeader