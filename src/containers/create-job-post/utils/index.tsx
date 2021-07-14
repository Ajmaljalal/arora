import JobDescription from "../job-description-form"
import HiringPipeline from "../job-hiring-pipeline-form"
import JobImpacts from "../job-impacts-form"
import JobResponsibilities from "../job-responsibilities-form"
import JobScoreCard from "../job-score-card-form"
import JobSkillsRequiremnets from "../job-skills-requirements-form"
import JobSummaryForm from "../job-summary-form"

export type JobSummaryObject = {
  JobTitle: string
  JobType: string
  JobMethod: string
  JobLocation: string
  ApplicationDeadline: string
  Minsalary: number
  MaxSalary: number
  MinYearsofExperience: number
  isComplete: boolean
}
export type JobSummaryFormErrorsObject = {
  titleErr: string
  typeErr: string
  methodErr: string
  locationErr: string
  deadlineErr: string
  minSalaryErr: string
  maxSalaryErr: string
  experienceErr: string
}

export const jobSummaryInitialState: JobSummaryObject = {
  JobTitle: '',
  JobType: '',
  JobMethod: '',
  JobLocation: '',
  ApplicationDeadline: '',
  Minsalary: 0,
  MaxSalary: 0,
  MinYearsofExperience: 0,
  isComplete: false
}

export const jobSummaryFormErrorsInitialState: JobSummaryFormErrorsObject = {
  titleErr: '',
  typeErr: '',
  methodErr: '',
  locationErr: '',
  deadlineErr: '',
  minSalaryErr: '',
  maxSalaryErr: '',
  experienceErr: ''
}


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

export const getCurrentFormData = (jobSummaryFormData: JobSummaryObject, currentStep: { name: string; index: number }) => {
  let currentFormData: JobSummaryObject = jobSummaryFormData
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