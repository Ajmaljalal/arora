import React, { useState } from 'react'
import { Badge, Box, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import GreenCheckIcon from '../../../public/assets/icons/check-circle-green-fill.svg'

type JobPostStepsProps = {}

const JobPostStepItems = [
  {
    name: 'Job Summary',
    isComplete: true
  },
  {
    name: 'Job Description',
    isComplete: true
  },
  {
    name: 'Responsibilities',
    isComplete: false
  },
  {
    name: 'Skills & Requirements',
    isComplete: false
  },
  {
    name: 'Candidate Impacts',
    isComplete: false
  },
  {
    name: 'Hiring Pipeline',
    isComplete: false
  },
  {
    name: 'Score Card',
    isComplete: false
  }
]

const JobPostSteps = ({ }: JobPostStepsProps) => {
  const [currentStep, setCurrentStep] = useState(0)

  const handleCurrentStep = (step: number) => {
    setCurrentStep(step)
  }

  const renderCurrentStepNumberBadge = (num: number) => {
    return (
      <Badge
        bg='brand.secondaryLight'
        color='brand.darkGreen'
        border='1px solid'
        borderColor='brand.secondary'
        borderRadius='50%'
        w='24px'
        h='24px'
        display='flex'
        justifyContent='center'
        alignItems='center'
        fontWeight='400'
        fontSize='14px'
        mr='8px'
      >
        {num + 1}
      </Badge>
    )
  }

  const renderNotCompleteStepNumberBadge = (num: number) => {
    return (
      <Badge
        bg='brand.grey100'
        color='brand.grey300'
        borderRadius='50%'
        w='24px'
        h='24px'
        display='flex'
        justifyContent='center'
        alignItems='center'
        fontWeight='400'
        fontSize='14px'
        mr='8px'
      >
        {num + 1}
      </Badge>
    )

  }

  const renderJobPostStepItems = () => {
    return JobPostStepItems.map((item: any, index: number) => {
      const isCurrent = item.name === JobPostStepItems[currentStep].name
      const isComplete = item.isComplete
      return (
        <ListItem
          key={item.name}
          border={isCurrent ? '1px solid' : 'none'}
          borderColor={isCurrent ? 'brand.secondary' : 'none'}
          borderRadius='4px'
          p='10px 16px'
          display='flex'
          alignItems='center'
          fontSize='16px'
          fontWeight={isCurrent ? '600' : '400'}
          color={isCurrent ? 'brand.black' : 'brand.grey500'}
          onClick={() => handleCurrentStep(index)}
        >
          {
            isCurrent ? renderCurrentStepNumberBadge(index) : isComplete ?
              <ListIcon as={GreenCheckIcon} width='25px' height='24px' /> : renderNotCompleteStepNumberBadge(index)
          }
          {item.name}
        </ListItem>
      )
    })
  }
  return (
    <List width='260px'>
      {renderJobPostStepItems()}
    </List>
  )
}

export default JobPostSteps

