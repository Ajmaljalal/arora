import React, { ChangeEvent, useState } from 'react'
import { Box, HStack, Modal, Text, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import { BaseButton } from '../../components/buttons/button'
import FormStepsMenu from '../../components/form/form-steps-menu'
import PageTitle from '../../components/headings/page-title'
import {
  JobPostForms,
  JobPostStepItems
} from './utils'
import { CurrentStepInitialState, formDataInitialValues, FormDataTypes } from './utils/objects'
import InlineAlert from '../../components/alerts/inline-alert'
import { convertToRaw, EditorState } from 'draft-js'
import { checkEmptyFields } from '../../utils/form'
import Link from 'next/link'
import { useRouter } from 'next/router'

type CreateJobPostProps = {
}

const CreateJobPostModal = ({ }: CreateJobPostProps) => {
  const [currentStep, setCurrentStep] = useState(CurrentStepInitialState)
  const [formData, setFormData] = useState(formDataInitialValues)
  const [textEditorState, setTextEditorState] = useState<EditorState>(EditorState.createEmpty())
  const [formErr, setFormErr] = useState('')
  const router = useRouter()

  const closeModal = () => {
    setFormData(clearForm())
    setTextEditorState(EditorState.createEmpty())
    setFormErr('')
    setCurrentStep(CurrentStepInitialState)
    router.back()
  }

  const clearForm = () => {
    formDataInitialValues.jobResponsibilities.responsibilities = []
    formDataInitialValues.jobSkills.skills = []
    formDataInitialValues.jobRequirements.requirements = []
    return formDataInitialValues
  }


  const handleCurrentStepChange = (nextStep) => {
    const isEmpty = checkEmptyFields(formData[currentStep.name])
    const isMovingBack = currentStep.index > nextStep.index
    const isJumpingSteps = nextStep.index - currentStep.index > 1
    if (isJumpingSteps) return
    // if (isEmpty && !isMovingBack) {
    //   setFormErr('field marked with * cannot be empty or 0!')
    //   return
    // }
    if (nextStep.name) {
      setCurrentStep(nextStep)
    } else {
      const nextStepIndex = currentStep.index + 1
      if (nextStepIndex < JobPostStepItems.length) {
        const nextStep = JobPostStepItems[nextStepIndex]
        setCurrentStep({ ...nextStep, index: nextStepIndex })
      }
    }
    toggleCurrentFormCompletionStatus(isEmpty)
    setFormErr('')
  }


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name.split(' ').join('')
    let value: string | number = e.target.value
    if (e.target.type === 'number' && value) {
      value = parseInt(value)
    }
    const currentInputData = {
      [fieldName]: value
    }
    const currentFormData = {
      ...formData[currentStep.name],
      ...currentInputData
    }
    const formDataTemp = {
      ...formData,
      [currentStep.name]: currentFormData
    }
    setFormData(formDataTemp)
  }

  const handleJobResponsibilitiesChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value: string = e.target.value
    let isComplete: boolean = false
    const responsibilities: string[] = formData.jobResponsibilities.responsibilities
    if (responsibilities.includes(value)) return
    responsibilities.push(value)
    if (responsibilities.length) {
      isComplete = true
    }
    const formDataTemp = {
      ...formData,
      jobResponsibilities: { responsibilities: responsibilities, isComplete: isComplete }
    }
    setFormData(formDataTemp)
  }

  const handleDeleteJobResponsibility = (responsibilityToDelete: string) => {
    const responsibilities: string[] = formData.jobResponsibilities.responsibilities
    const newResponsibilities = responsibilities.filter(responsibility => responsibility !== responsibilityToDelete)
    let isComplete: boolean = true
    if (!newResponsibilities.length) {
      isComplete = false
    }
    const formDataTemp = {
      ...formData,
      jobResponsibilities: { responsibilities: newResponsibilities, isComplete: isComplete }
    }
    setFormData(formDataTemp)
  }


  const handleArryTypeDataChange = (data: FormDataTypes) => {
    const formDataTemp = {
      ...formData,
      [currentStep.name]: data
    }
    setFormData(formDataTemp)
  }


  const handleRichTextEditorChange = (editorState: EditorState) => {
    setTextEditorState(editorState)
  }


  const toggleCurrentFormCompletionStatus = (isEmpty: boolean) => {
    if (currentStep.name === 'jobDescription' || currentStep.name === 'jobResponsibilities') {
      return
    }
    const currentFormData: FormDataTypes = formData[currentStep.name]
    if (!isEmpty) {
      currentFormData.isComplete = true
    } else {
      currentFormData.isComplete = false
    }
    const formDataTemp = {
      ...formData,
      [currentStep.name]: currentFormData
    }
    setFormData(formDataTemp)

  }


  const getFormcompletionStatus = () => {
    let jobDescription = ''
    convertToRaw(textEditorState.getCurrentContent()).blocks.forEach(block => jobDescription += block.text.split(','))
    return {
      jobSummary: formData.jobSummary.isComplete,
      jobResponsibilities: formData.jobResponsibilities.isComplete,
      jobSkills: formData.jobSkills.isComplete,
      jobRequirements: formData.jobRequirements.isComplete,
      jobImpacts: formData.jobImpacts.isComplete,
      jobPipeline: formData.jobPipeline.isComplete,
      jobScoreCard: formData.jobScoreCard.isComplete,
      jobDescription: jobDescription.trim().length > 0
    }
  }


  const renderModalBody = () => {
    const formsCompletionStatus = getFormcompletionStatus()
    return (
      <ModalBody bg='brand.white' pt='20px'>
        <HStack align='flex-start' spacing='8em'>
          <FormStepsMenu onStepChange={handleCurrentStepChange} stepItems={JobPostStepItems} currentStep={currentStep.name} formsCompletionStatus={formsCompletionStatus} />
          <Box width='636px' minWidth='410px'>
            <Box mb='32px' pb='24px' borderBottom='1px solid' borderColor='brand.grey200'>
              <PageTitle text={currentStep.text} />
              <Text fontSize={'14px'} fontWeight='400' color='brand.grey400' mt='8px'>{currentStep.desc}</Text>
            </Box>
            {formErr &&
              <InlineAlert status='error' title='Missing required fields' message={formErr} />
            }
            <Box height='500px' overflowY='auto'>
              {renderCurrentForm()}
            </Box>
            {renderBottomBtns()}
          </Box>
        </HStack>
      </ModalBody>
    )
  }


  const renderCurrentForm = () => {
    let CurrentStepForm = JobPostForms[currentStep.name]
    const currentFormData = formData && formData[currentStep.name]
    switch (currentStep.name) {
      case 'jobDescription':
        return <CurrentStepForm onChange={handleRichTextEditorChange} data={textEditorState} />
      case 'jobResponsibilities':
        return <CurrentStepForm onChange={handleJobResponsibilitiesChange} onDelete={handleDeleteJobResponsibility} data={currentFormData} />
      case 'jobSkills':
      case 'jobRequirements':
        return <CurrentStepForm onChange={handleArryTypeDataChange} data={currentFormData} />
      default:
        return <CurrentStepForm onChange={handleChange} data={currentFormData} />
    }
  }

  const renderBottomBtns = () => {
    return (
      <HStack spacing={4} mt='50px' justifyContent='flex-end'>
        <Link href='/'><a><BaseButton text='Cancel' outlined={true} onClick={closeModal} borderColor='brand.primary' color='brand.primary' /></a></Link>
        <BaseButton text='Next' onClick={handleCurrentStepChange} color='brand.white' bg='brand.primary' />
      </HStack>
    )
  }

  return (
    <Modal
      isOpen={true}
      onClose={closeModal}
      size='full'
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent h='100%' color='brand.black' bg='bran.white'>
        <ModalHeader bg='brand.white' borderBottom='1px solid' borderColor='brand.grey200'>Post a job</ModalHeader>
        <ModalCloseButton />
        {renderModalBody()}
      </ModalContent>
    </Modal>
  )
}

export default CreateJobPostModal

