import JobDescription from "../job-description-form"
import HiringPipeline from "../job-hiring-pipeline-form"
import JobImpacts from "../job-impacts-form"
import JobResponsibilities from "../job-responsibilities-form"
import JobScoreCard from "../job-score-card-form"
import JobSkillsRequiremnets from "../job-skills-requirements-form"
import JobSummaryForm from "../job-summary-form"
import { FormDataTypes } from "./objects"


export const jobPostStepComponents = [
  JobSummaryForm,
  JobDescription,
  JobResponsibilities,
  JobSkillsRequiremnets,
  JobImpacts,
  HiringPipeline,
  JobScoreCard
]

// objects to store and keep track of form data temporarily when the value of an input changes
export let formDataForJobSummaryTemp = {
  isComplete: false
}

export const jobPostStepItems = [
  {
    name: 'Job Summary',
    isComplete: false
  },
  {
    name: 'Job Description',
    isComplete: false
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

export const getCurrentFormData = (formData: FormDataTypes, currentStep: { name: string; index: number }) => {
  let currentFormData = formData
  switch (currentStep.name) {
    case 'Job Description':
    case 'Responsibilities':
    case 'Skills & Requirements':
    case 'Candidate Impacts':
    case 'Hiring Pipeline':
    default:
      return currentFormData
  }
}