import React, { ChangeEvent, useState } from 'react'
import { Box, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, ModalProps } from '@chakra-ui/react'
import { BaseButton } from '../../components/buttons/button'
import FormStepsMenu from '../../components/form/form-steps-menu'
import PageTitle from '../../components/headings/page-title'
import {
  JobPostForms,
  JobPostStepItems
} from './utils'
import { CurrentStepInitialState, CurrentStepObject, formDataInitialValues, FormDataTypes } from './utils/objects'
import InlineAlert from '../../components/alerts/inline-alert'
import { convertToRaw, EditorState } from 'draft-js'
import { checkEmptyFields } from '../../utils/form'

type CreateJobPostProps = {
} & Omit<ModalProps, 'children'>


const CreateJobPost = ({ isOpen, onClose }: CreateJobPostProps) => {
  const [currentStep, setCurrentStep] = useState<CurrentStepObject>(CurrentStepInitialState)
  const [formData, setFormData] = useState(formDataInitialValues)
  const [textEditorState, setTextEditorState] = useState<EditorState>(EditorState.createEmpty())
  const [formErr, setFormErr] = useState('')

  const closeModal = () => {
    // Make sure on closing the modal all form data and related state is empty
    setFormData(formDataInitialValues)
    setTextEditorState(EditorState.createEmpty())
    setFormErr('')
    setCurrentStep(CurrentStepInitialState)
    onClose()
  }


  const handleCurrentStepChange = (nextStep: CurrentStepObject) => {
    const isEmpty = checkEmptyFields(formData[currentStep.name])
    const isMovingBack = currentStep.index > nextStep.index
    const isJumpingSteps = nextStep.index - currentStep.index > 1
    if (isJumpingSteps) return
    // if (isEmpty && !isMovingBack) {
    //   setFormErr('field marked with * cannot be empty or 0!')
    //   return
    // }
    if (nextStep.text) {
      setCurrentStep(nextStep)
    } else {
      const nextStepIndex = currentStep.index + 1
      if (nextStepIndex < JobPostStepItems.length) {
        const nextStep = JobPostStepItems[nextStepIndex]
        setCurrentStep({ name: nextStep.name, text: nextStep.text, index: nextStepIndex })
      }
    }
    toggleCurrentFormCompletionStatus(isEmpty)
    setFormErr('')
  }


  const handleChagne = (e: ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name.split(' ').join('')
    let value: string | number = e.target.value
    if (e.target.type === 'number' && value) {
      value = parseInt(value)
    }
    // Temp objects to store and keep track of form data temporarily when the value of an input changes
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

  const handleRichTextEditorChange = (editorState: EditorState) => {
    setTextEditorState(editorState)
  }


  const toggleCurrentFormCompletionStatus = (isEmpty: boolean) => {
    if (currentStep.name === 'jobDescription') {
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

  const getFormCompletionStatus = () => {
    let jobDescription = ''
    convertToRaw(textEditorState.getCurrentContent()).blocks.forEach(block => jobDescription += block.text.split(','))
    return {
      jobSummary: formData.jobSummary.isComplete,
      jobResponsibilities: formData.jobResponsibilities.isComplete,
      jobSkillsRequirements: formData.jobSkillsRequirements.isComplete,
      jobImpacts: formData.jobImpacts.isComplete,
      jobPipeline: formData.jobPipeline.isComplete,
      jobScoreCard: formData.jobScoreCard.isComplete,
      jobDescription: jobDescription.trim().length > 0
    }
  }


  const renderModalBody = () => {
    const formsCompletionStatus = getFormCompletionStatus()
    return (
      <ModalBody bg='brand.white' pt='20px'>
        <HStack align='flex-start' spacing={20}>
          <FormStepsMenu onStepChange={handleCurrentStepChange} stepItems={JobPostStepItems} currentStep={currentStep.name} formsCompletionStatus={formsCompletionStatus} />
          <Box width='100%' maxWidth='636px'>
            <Box mb='32px' pb='24px' borderBottom='1px solid' borderColor='brand.grey200'>
              <PageTitle text={currentStep.text} />
            </Box>
            {formErr &&
              <InlineAlert status='error' title='Missing required fields' message={formErr} />
            }
            {renderCurrentForm()}
            {renderBottomBtns()}
          </Box>
        </HStack>
      </ModalBody>
    )
  }


  const renderCurrentForm = () => {
    let CurrentStepForm = JobPostForms[currentStep.name]
    const currentFormData = formData[currentStep.name]
    if (currentStep.name === 'jobDescription') {
      return (
        <Box maxHeight='600px' overflowY='auto'>
          {<CurrentStepForm onChange={handleRichTextEditorChange} data={textEditorState} />}
        </Box>
      )
    } else {
      return (
        <Box maxHeight='600px' overflowY='auto'>
          {<CurrentStepForm onChange={handleChagne} data={currentFormData} />}
        </Box>
      )
    }
  }

  const renderBottomBtns = () => {
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
