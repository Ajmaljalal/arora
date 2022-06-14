import React, { ChangeEvent, useState } from 'react'
import { Box, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, ModalProps } from '@chakra-ui/react'
import { BaseButton } from '../../components/buttons/button'
import JobPostStepsMenu from './job-post-steps-menu'
import PageTitle from '../../components/headings/page-title'
import {
  getCurrentFormData,
  jobPostStepComponents,
  jobPostStepItems,
  jobSummaryFormErrorsInitialState,
  JobSummaryFormErrorsObject,
  jobSummaryInitialState,
  JobSummaryObject
} from './utils'

type CreateJobPostProps = {
} & Omit<ModalProps, 'children'>


const CreateJobPost = ({ isOpen, onClose }: CreateJobPostProps) => {
  const [currentStep, setCurrentStep] = useState({ name: 'Job Summary', index: 0 })
  const [jobSummaryFormData, setJobSummary] = useState<JobSummaryObject>(jobSummaryInitialState)
  const [jobSummaryFormErrors, setJobSummaryFormErrors,] = useState<JobSummaryFormErrorsObject>(jobSummaryFormErrorsInitialState)

  const closeModal = () => {
    // Make sure all form data and related state is empty
    setJobSummary(jobSummaryInitialState)
    setJobSummaryFormErrors(jobSummaryFormErrorsInitialState)
    onClose()
  }


  const handleCurrentStepChange = (step: { name: string, index: number }) => {
    const isError = checkEmptyFields()
    if (isError) {
      return
    }
    if (step.name) {
      setCurrentStep(step)
    } else {
      const nextStepIndex = currentStep.index + 1
      if (nextStepIndex < jobPostStepItems.length) {
        const nextStep = jobPostStepItems[nextStepIndex]
        setCurrentStep({ name: nextStep.name, index: nextStepIndex })
      }
    }
  }

  const checkEmptyFields = (): boolean => {
    const jobSummaryObject = jobSummaryFormData
    const titleExist = jobSummaryObject?.JobTitle?.trim().length > 0
    if (!titleExist) {
      setJobSummaryFormErrors({ ...jobSummaryFormErrors, titleErr: 'Title is required field' })
      return true
    } else {
      setJobSummaryFormErrors({ ...jobSummaryFormErrors, titleErr: '' })
    }
    const typeExist = jobSummaryObject?.JobType?.length > 0
    if (!typeExist) {
      setJobSummaryFormErrors({ ...jobSummaryFormErrors, typeErr: 'Type is required field' })
      return true
    }
    return false
  }


  const handleChagne = (e: ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name.split(' ').join('')
    const currentInputData = {
      [fieldName]: e.target.value
    }
    // Temp objects to store and keep track of form data temporarily when the value of an input changes
    let formDataForJobSummaryTemp = {
      ...jobSummaryFormData,
      ...currentInputData,
      isComplete: false
    }
    setJobSummary(formDataForJobSummaryTemp as JobSummaryObject)
  }


  const renderModalBody = () => {
    return (
      <ModalBody bg='brand.white' pt='20px'>
        <HStack align='flex-start' spacing={20}>
          <JobPostStepsMenu onStepChange={handleCurrentStepChange} jobPostStepItems={jobPostStepItems} currentStep={currentStep.name} />
          <Box width='100%' maxWidth='636px'>
            <Box mb='32px' pb='24px' borderBottom='1px solid' borderColor='brand.grey200'>
              <PageTitle text={currentStep.name} />
            </Box>
            {renderCurrentStepForm()}
            {renderBottomButons()}
          </Box>
        </HStack>
      </ModalBody>
    )
  }


  const renderCurrentStepForm = () => {
    const CurrenStep = jobPostStepComponents[currentStep.index]
    const currentFormData = getCurrentFormData(jobSummaryFormData, currentStep)
    return (
      <Box maxHeight='600px' overflowY='auto'>
        {<CurrenStep onChange={handleChagne} errors={jobSummaryFormErrors} data={currentFormData} />}
      </Box>
    )
  }

  const renderBottomButons = () => {
    return (
      <HStack spacing={4} mt='50px' justifyContent='flex-end'>
        <BaseButton text='Cancel' outlined={true} onClick={closeModal} borderColor='brand.primary' color='brand.primary' />
        <BaseButton text='Next' onClick={handleCurrentStepChange} color='brand.white' bg='brand.primary' />
      </HStack>
    )
  }
  return (
    <Modal
      isOpen={isOpen}
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

export default CreateJobPost
