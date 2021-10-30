import React, { ChangeEvent, useState } from 'react'
import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, ModalProps } from '@chakra-ui/react'
import { BaseButton } from '../../components/buttons/button'
import JobPostStepsMenu from './job-post-steps-menu'
import PageTitle from '../../components/headings/page-title'
import {
  jobPostStepComponents,
  jobPostStepItems
} from './utils'
import { FormDataTypes, jobSummaryInitialState, JobSummaryObject } from './utils/objects'

type CreateJobPostProps = {
} & Omit<ModalProps, 'children'>


const CreateJobPost = ({ isOpen, onClose }: CreateJobPostProps) => {
  const [currentStep, setCurrentStep] = useState({ name: 'Job Summary', index: 0 })
  const [jobSummaryFormData, setJobSummary] = useState<JobSummaryObject>(jobSummaryInitialState)
  const [formErr, setFormErr] = useState('')

  const closeModal = () => {
    // Make sure all form data and related state is empty
    setJobSummary(jobSummaryInitialState)
    setFormErr('')
    setCurrentStep({ name: 'Job Summary', index: 0 })
    onClose()
  }


  const handleCurrentStepChange = (step: { name: string, index: number }) => {
    // const isEmpty = checkEmptyFields()
    // if (isEmpty) {
    //   return
    // }
    if (step.name) {
      setCurrentStep(step)
    } else {
      const nextStepIndex = currentStep.index + 1
      if (nextStepIndex < jobPostStepItems.length) {
        const nextStep = jobPostStepItems[nextStepIndex]
        setCurrentStep({ name: nextStep.name, index: nextStepIndex })
      }
    }
    setFormErr('')
  }

  const checkEmptyFields = (): boolean => {
    const jobSummaryObject = jobSummaryFormData
    const isEmpty = Object.keys(jobSummaryObject).some(key => {
      if (typeof jobSummaryObject[key] === 'number') return jobSummaryObject[key] < 1
      return jobSummaryObject[key].toString().trim().length < 1
    })
    setFormErr('field marked with * cannot be empty or 0!')
    return isEmpty
  }


  const handleChagne = (e: ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name.split(' ').join('')
    let value: string | number = e.target.value
    if (e.target.type === 'number' && value) {
      value = parseInt(value)
    }
    const currentInputData = {
      [fieldName]: value
    }
    // Temp object to store and keep track of form data temporarily when the value of an input changes
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
            {formErr &&
              <Alert status='error' bg='brand.lightOrange' color='brand.orange' border='1px solid' borderColor='brand.orange' borderRadius='4px'>
                <AlertIcon color='brand.orange' />
                <AlertTitle>Required fields missing:</AlertTitle>
                <AlertDescription>{formErr}</AlertDescription>
              </Alert>
            }
            {renderCurrentStepForm()}
            {renderBottomButons()}
          </Box>
        </HStack>
      </ModalBody>
    )
  }


  const renderCurrentStepForm = () => {
    const CurrenStep = jobPostStepComponents[currentStep.index]
    let currentFormData: FormDataTypes
    switch (currentStep.name) {
      case 'Job Description':
      case 'Responsibilities':
      case 'Skills & Requirements':
      case 'Candidate Impacts':
      case 'Hiring Pipeline':
      default:
        currentFormData = jobSummaryFormData
    }
    return (
      <Box maxHeight='600px' overflowY='auto'>
        {<CurrenStep onChange={handleChagne} data={currentFormData} />}
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

  console.log(jobSummaryFormData)
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
