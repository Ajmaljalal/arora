export type JobCardObject = {
  id: string
  JobTitle: string
  JobType: string
  JobMethod: string
  JobLocation: string
  ApplicationDeadline: string
  MinSalary: number
  MaxSalary: number
  MinYearsofExperience: number
  company: string
  status: string
  isComplete?: boolean
}