

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

export type JobDescriptionObject = {
  description: string
  isComplete: boolean
}

export type JobResponsibilitiesObject = {
  responsibilities: string[]
  isComplete: boolean
}

export type JobSkillsReqObject = {
  skills: string[]
  requirements: string[]
  isComplete: boolean
}

export type JobImpactsObject = {
  firstMonth: string[]
  threeMonth: string[]
  sixMonth: string[]
  oneYear: string[]
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

export const JobDescriptionInitialState = {
  description: '',
  isComplete: false
}

export const JobResponsibilitiesInitialState = {
  responsibilities: [],
  isComplete: false
}

export const JobSkillsReqInitialState = {
  skills: [],
  requirements: [],
  isComplete: false
}

export const JobImpactsInitialState = {
  firstMonth: [],
  threeMonth: [],
  sixMonth: [],
  oneYear: [],
  isComplete: false
}


export type FormDataTypes =
  | JobSummaryObject
  | JobDescriptionObject
  | JobResponsibilitiesObject
  | JobSkillsReqObject
  | JobImpactsObject
  | JobHiringPipelineObject
  | JobScoreCardObject
