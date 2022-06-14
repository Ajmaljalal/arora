import React from 'react'
import { Badge, List, ListIcon, ListItem } from '@chakra-ui/react'
import GreenCheckIcon from '../../../public/assets/icons/check-circle-green-fill.svg'

type JobPostStepsProps = {
  onStepChange: ({ name: string, index: number }) => void
  jobPostStepItems: any[]
  currentStep: string
}

const JobPostSteps = ({ onStepChange, jobPostStepItems, currentStep }: JobPostStepsProps) => {

  const handleCurrentStepChange = (step: { name: string, index: number }) => {
    onStepChange(step)
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
    return jobPostStepItems.map((item: { name: string, isComplete: boolean }, index: number) => {
      const isCurrent = item.name === currentStep
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
          cursor='pointer'
          onClick={() => handleCurrentStepChange({ name: item.name, index })}
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
    <List width='260px' minWidth='234px'>
      {renderJobPostStepItems()}
    </List>
  )
}

export default JobPostSteps

