import React, { useState } from 'react'
import { Box, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, ModalProps } from '@chakra-ui/react'
import { BaseButton } from '../../components/buttons/button'
import JobPostSteps from './job-post-steps-menu'
import JobSummaryForm from './job-summary-form'
import PageTitle from '../../components/headings/page-title'
import JobDescription from './job-description-form'
import JobResponsibilities from './job-responsibilities-form'
import JobSkillsRequiremnets from './job-skills-requirements-form'
import JobImpacts from './job-impacts-form'
import HiringPipeline from './job-hiring-pipeline-form'
import JobScoreCard from './job-score-card-form'

type CreateJobPostProps = {
} & Omit<ModalProps, 'children'>

const jobPostStepComponents = [
  JobSummaryForm,
  JobDescription,
  JobResponsibilities,
  JobSkillsRequiremnets,
  JobImpacts,
  HiringPipeline,
  JobScoreCard
]

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

const CreateJobPost = ({ isOpen, onClose }: CreateJobPostProps) => {
  const [currentStep, setCurrentStep] = useState({ name: 'Job Summary', index: 0 })

  const handleCurrentStepChange = (step: { name: string, index: number }) => {
    if (step.name) {
      setCurrentStep(step)
    } else {
      const nextStepIndex = currentStep.index + 1
      if (nextStepIndex < JobPostStepItems.length) {
        const nextStep = JobPostStepItems[nextStepIndex]
        setCurrentStep({ name: nextStep.name, index: nextStepIndex })
      }
    }
  }



  const CurrenStep = jobPostStepComponents[currentStep.index]
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size='full'
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent h='100%' color='brand.black' bg='bran.white'>
        <ModalHeader bg='brand.white' borderBottom='1px solid' borderColor='brand.grey200'>Post a job</ModalHeader>
        <ModalCloseButton />
        <ModalBody bg='brand.white' pt='20px'>
          <HStack align='flex-start' spacing={20}>
            <JobPostSteps onStepChange={handleCurrentStepChange} jobPostStepItems={JobPostStepItems} currentStep={currentStep.name} />
            <Box width='100%' maxWidth='636px'>
              <Box mb='32px' pb='24px' borderBottom='1px solid' borderColor='brand.grey200'>
                <PageTitle text={currentStep.name} />
              </Box>
              <Box maxHeight='600px' overflowY='auto'>
                {<CurrenStep />}
              </Box>
              <HStack spacing={4} mt='50px' justifyContent='flex-end'>
                <BaseButton text='Cancel' outlined={true} onClick={onClose} borderColor='brand.primary' color='brand.primary' />
                <BaseButton text='Next' onClick={handleCurrentStepChange} color='brand.white' bg='brand.primary' />
              </HStack>
            </Box>
          </HStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default CreateJobPost