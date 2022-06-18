import JobDescriptionFrom from "../job-description-form"
import HiringPipelineForm from "../job-hiring-pipeline-form"
import JobImpactsForm from "../job-impacts-form"
import JobResponsibilitiesForm from "../job-responsibilities-form"
import JobScoreCardForm from "../job-score-card-form"
import JobSkillsRequiremnetsForm from "../job-skills-requirements-form"
import JobSummaryForm from "../job-summary-form"


export const JobPostForms = {
  jobSummary: JobSummaryForm,
  jobResponsibilities: JobResponsibilitiesForm,
  jobSkillsRequirements: JobSkillsRequiremnetsForm,
  jobImpacts: JobImpactsForm,
  jobDescription: JobDescriptionFrom,
  jobPipeline: HiringPipelineForm,
  jobScoreCard: JobScoreCardForm,
}

export const JobPostStepItems = [
  {
    text: 'Job Summary',
    name: 'jobSummary',
  },
  {
    text: 'Responsibilities',
    name: 'jobResponsibilities',
  },
  {
    text: 'Skills & Requirements',
    name: 'jobSkillsRequirements',
  },
  {
    text: 'Candidate Impacts',
    name: 'jobImpacts',
  },
  {
    text: 'Job Description',
    name: 'jobDescription',
  },
  {
    text: 'Hiring Pipeline',
    name: 'jobPipeline',
  },
  {
    text: 'Score Card',
    name: 'jobScoreCard',
  }
]
