import React from 'react'
import { Box, Heading, HStack, Text } from '@chakra-ui/react'
import BriefcaseIcon from '../../../../public/assets/icons/briefcase.svg'
import LocatiionIcon from '../../../../public/assets/icons/location.svg'
import RightArrowIcon from '../../../../public/assets/icons/chevron-right.svg'
import Link from 'next/link'

type JobOpeningsProps = {
  companyId: string
}

const jobs = [
  {
    id: 'randomejobwithidFive',
    title: 'Full stack developer',
    location: 'Remote',
    type: 'Full time',
    deadline: '12/23/2022'
  },
  {
    id: 'randomejobwithidfour',
    title: 'Front End developer',
    location: 'Remote',
    type: 'Full time',
    deadline: '12/23/2022'
  },
  {
    id: 'randomejobwithidone',
    title: 'React Engineer',
    location: 'Remote',
    type: 'Full time',
    deadline: '12/23/2022'
  },
  {
    id: 'randomejobwithidtwo',
    title: 'Web Developer',
    location: 'Remote',
    type: 'Full time',
    deadline: '12/23/2022'
  },
  {
    id: 'randomejobwithidthree',
    title: 'QA Engineer',
    location: 'Remote',
    type: 'Full time',
    deadline: '12/23/2022'
  },
  {
    id: 'randomejobwithidFive',
    title: 'UI/UX Engineer',
    location: 'Remote',
    type: 'Full time',
    deadline: '12/23/2022'
  }
]

const JobOpenings = ({ companyId }: JobOpeningsProps) => {

  const renderDetails = (text: string, icon: JSX.Element) => {
    return (
      <HStack spacing={1}>
        {icon}
        <Text fontSize='14px' color='brand.grey400'>{text}</Text>
      </HStack>
    )
  }

  return (
    <Box>
      {
        jobs?.map(job => {
          return (
            <Link href={`/jobs/${job.id}`}>
              <HStack
                key={job.id}
                px='4px'
                pb='12px'
                mt='12px'
                borderBottom='1px solid'
                borderColor='brand.grey200'
                cursor='pointer'
                _last={{ padding: '0', border: 'none' }}
                _first={{ margin: '0' }}
                justifyContent='space-between'
              >
                <Box>
                  <Heading
                    as='h3'
                    fontWeight='600'
                    color='brand.primary'
                    fontSize='16px'
                  >
                    {job.title}
                  </Heading>
                  <HStack spacing={4}>
                    {renderDetails(job.type, <BriefcaseIcon />)}
                    {renderDetails(job.location, <LocatiionIcon />)}
                  </HStack>
                </Box>
                <RightArrowIcon />
              </HStack>
            </Link>
          )
        })
      }
    </Box>
  )
}

export default JobOpenings