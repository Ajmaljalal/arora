import React from 'react'
import { Box, VStack, Text, HStack } from '@chakra-ui/react'
import BorderedTitledBox from '../../../../components/layouts/bordered-titled-box'
type EducationProps = {
  educations: any
}

const Education = ({ educations }: EducationProps) => {

  const renderEducation = () => {
    const dducationLength = educations?.length
    const lastIndex = dducationLength - 1
    return (
      <Box p='4px'>
        {
          educations?.map((education, index) => {
            const graduationDate = new Date(education.graduationDate).toLocaleDateString('en-us', { year: "numeric", month: "short" })
            return (
              <VStack
                key={education.graduationDate + index}
                alignItems='flex-start'
                mb={index === lastIndex ? '0px' : '16px'}
                pb={index === lastIndex ? '0px' : '16px'}
                spacing={0}
                borderBottom={index === lastIndex ? 'none' : '2px solid'}
                borderColor='brand.white'
              >
                <Text fontWeight='600'>{education.degree}</Text>
                <HStack margin='0' spacing={3}>
                  <Text>{education.school}</Text>
                  <Text color='brand.grey400'>-  {graduationDate}</Text>
                </HStack>
              </VStack>
            )
          })
        }
      </Box>
    )
  }

  return (
    <Box mt='32px'>
      <BorderedTitledBox title='Education' bg='brand.grey100' titleColor='brand.orange'>
        {renderEducation()}
      </BorderedTitledBox>
    </Box>
  )
}

export default Education