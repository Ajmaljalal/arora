import React, { ChangeEvent, useEffect, useState } from 'react'
import { Box, HStack, Text } from '@chakra-ui/react'
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
  job?: any
}

const CreateJobPost = ({ job }: CreateJobPostProps) => {
  const [currentStep, setCurrentStep] = useState(CurrentStepInitialState)
  const [formData, setFormData] = useState(formDataInitialValues)
  const [textEditorState, setTextEditorState] = useState<EditorState>(EditorState.createEmpty())
  const [formErr, setFormErr] = useState('')
  const router = useRouter()

  useEffect(() => {
    if (job) {
      setFormData(job)
    }
  }, [])

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
    // const isMovingBack = currentStep.index > nextStep.index
    // const isJumpingSteps = nextStep.index - currentStep.index > 1
    // if (isJumpingSteps) return
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


  const renderForm = () => {
    const formsCompletionStatus = getFormcompletionStatus()
    return (
      <Box p='20px' h='calc(100vh - 72px)'>
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
            <Box height='500px' py='10px' overflow='hidden'>
              {renderCurrentForm()}
            </Box>
            {renderBottomBtns()}
          </Box>
        </HStack>
      </Box>
    )
  }


  const renderCurrentForm = () => {
    let CurrentStepForm = JobPostForms[currentStep.name]
    const currentFormData = formData && formData[currentStep.name]
    switch (currentStep.name) {
      case 'jobDescription':
        return <CurrentStepForm onChange={handleRichTextEditorChange} data={textEditorState} />
      case 'jobResponsibilities':
      case 'jobSkills':
      case 'jobRequirements':
      case 'jobImpacts':
      case 'jobPipeline':
      case 'jobScoreCard':
        return <CurrentStepForm onChange={handleArryTypeDataChange} data={currentFormData} />
      default:
        return <CurrentStepForm onChange={handleChange} data={currentFormData} />
    }
  }

  const renderBottomBtns = () => {
    return (
      <HStack
        spacing={4}
        mt='50px'
        justifyContent='flex-end'
      >
        <BaseButton text='Cancel' outlined={true} onClick={closeModal} borderColor='brand.primary' color='brand.primary' />
        <BaseButton text='Next' onClick={handleCurrentStepChange} color='brand.white' bg='brand.primary' />
      </HStack>
    )
  }

  return (
    <Box
      key='create-job-post'
      height='100vh'
    >
      <Box
        px='40px'
        bg='bran.white'
        minHeight='50px'
        borderBottom='1px solid'
        borderColor='brand.grey200'
        display='flex'
        alignItems='center'
      >
        <Box bg='brand.white' fontSize='18px' fontWeight='600' >Post a job</Box>
      </Box>
      {renderForm()}
    </Box>
  )
}

export default CreateJobPost

