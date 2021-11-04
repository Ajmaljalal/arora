import React from 'react'
import { Badge, List, ListIcon, ListItem } from '@chakra-ui/react'
import GreenCheckIcon from '../../../public/assets/icons/check-circle-green-fill.svg'
import { CurrentStepObject, FormDataTypes } from '../../containers/create-job-post/utils/objects'

type FormStepsProps = {
  onStepChange: (step: CurrentStepObject) => void
  stepItems: any[]
  formsCompletionStatus: any
  currentStep: string
}

const FormStepsMenu = ({ onStepChange, stepItems, formsCompletionStatus, currentStep }: FormStepsProps) => {

  const handleCurrentStepChange = (step) => {
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
    return stepItems.map((item: { name: string, text: string, desc: string }, index: number) => {
      const isCurrent = item.name === currentStep
      const isComplete = formsCompletionStatus && formsCompletionStatus[item.name]
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
          onClick={() => handleCurrentStepChange({ name: item.name, desc: item.desc, text: item.text, index })}
        >
          {
            isCurrent ? renderCurrentStepNumberBadge(index) : isComplete ?
              <ListIcon as={GreenCheckIcon} width='25px' height='25px' /> : renderNotCompleteStepNumberBadge(index)
          }
          {item.text}
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

export default FormStepsMenu

