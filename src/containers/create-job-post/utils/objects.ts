import { EditorState } from "draft-js"


export type CurrentStepObject = {
  step: {
    name: string
    text: string
    desc: string
  }
  index: number
}

export const CurrentStepInitialState = {
  text: 'Job Summary',
  name: 'jobSummary',
  desc: 'Create a summary of your job!',
  index: 0
}

export type JobSummaryObject = {
  JobTitle: string
  JobType: string
  JobMethod: string
  JobLocation: string
  ApplicationDeadline: string
  MinSalary: number
  MaxSalary: number
  MinYearsofExperience: number
  isComplete: boolean
}

export type JobDescriptionObject = {
  description: EditorState
  isComplete: boolean
}

export type JobResponsibilitiesObject = {
  responsibilities: string[]
  isComplete: boolean
}

export type JobSkillsObject = {
  skills: string[]
  isComplete: boolean
}

export type JobRequirementsObject = {
  requirements: string[]
  isComplete: boolean
}

export type JobImpactsObject = {
  firstMonth: string
  threeMonths: string
  oneYear: string
  isComplete: boolean
}

export type JobHiringPipelineObject = {
  id: string
  isComplete: boolean
}

export type JobScoreCardObject = {
  id: string
  isComplete: boolean
}

export const JobSummaryInitialState: JobSummaryObject = {
  JobTitle: '',
  JobType: '',
  JobMethod: '',
  JobLocation: '',
  ApplicationDeadline: '',
  MinSalary: 0,
  MaxSalary: 0,
  MinYearsofExperience: 0,
  isComplete: false
}

export const JobDescriptionInitialState: JobDescriptionObject = {
  description: null,
  isComplete: false
}

export const JobResponsibilitiesInitialState: JobResponsibilitiesObject = {
  responsibilities: [],
  isComplete: false
}

export const JobSkillsInitialState: JobSkillsObject = {
  skills: [],
  isComplete: false
}

export const JobRequirementsInitialState: JobRequirementsObject = {
  requirements: [],
  isComplete: false
}

export const JobImpactsInitialState: JobImpactsObject = {
  firstMonth: '',
  threeMonths: '',
  oneYear: '',
  isComplete: false
}

export const JobHiringPipelineInitialState: JobHiringPipelineObject = {
  id: '',
  isComplete: false
}

export const JobScoreCardInitialState: JobScoreCardObject = {
  id: '',
  isComplete: false
}


export type FormDataTypes =
  | JobSummaryObject
  | JobDescriptionObject
  | JobResponsibilitiesObject
  | JobSkillsObject
  | JobRequirementsObject
  | JobImpactsObject
  | JobHiringPipelineObject
  | JobScoreCardObject

export const formDataInitialValues = {
  jobSummary: JobSummaryInitialState,
  jobResponsibilities: JobResponsibilitiesInitialState,
  jobSkills: JobSkillsInitialState,
  jobRequirements: JobRequirementsInitialState,
  jobImpacts: JobImpactsInitialState,
  jobPipeline: JobHiringPipelineInitialState,
  jobScoreCard: JobScoreCardInitialState
}