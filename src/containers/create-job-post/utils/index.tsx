import JobDescriptionFrom from "../job-description-form"
import HiringPipelineForm from "../job-hiring-pipeline-form"
import JobImpactsForm from "../job-impacts-form"
import JobRequirementsForm from "../job-requirements-form"
import JobResponsibilitiesForm from "../job-responsibilities-form"
import JobScoreCardForm from "../job-score-card-form"
import JobSkillsForm from "../job-skills-form"
import JobSummaryForm from "../job-summary-form"


export const JobPostForms = {
  jobSummary: JobSummaryForm,
  jobResponsibilities: JobResponsibilitiesForm,
  jobSkills: JobSkillsForm,
  jobRequirements: JobRequirementsForm,
  jobImpacts: JobImpactsForm,
  jobDescription: JobDescriptionFrom,
  jobPipeline: HiringPipelineForm,
  jobScoreCard: JobScoreCardForm,
}

export const JobPostStepItems = [
  {
    text: 'Summary',
    name: 'jobSummary',
    desc: 'Create a summary of your job!'
  },
  {
    text: 'Responsibilities',
    name: 'jobResponsibilities',
    desc: 'List all the responsibilities of the job one by one!'
  },
  {
    text: 'Skills',
    name: 'jobSkills',
    desc: 'List all the skills and requirments!'
  },
  {
    text: 'Requirements',
    name: 'jobRequirements',
    desc: 'List all the skills and requirments!'
  },
  {
    text: 'Candidate Impacts',
    name: 'jobImpacts',
    desc: 'What will be the applicant busy with in the first month, three months, and in a year?'
  },
  {
    text: 'Job Description',
    name: 'jobDescription',
    desc: 'Describe the job in details, DO NOT include responsiblities, skills, and requirements once again!'
  },
  {
    text: 'Hiring Pipeline',
    name: 'jobPipeline',
    desc: 'Choose a hiring pipeline that showcases your hirigin process and flow!'
  },
  {
    text: 'Score Card',
    name: 'jobScoreCard',
    desc: 'Select a score card for this role!'
  }
]
