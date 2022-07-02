import React from 'react'
import { GetServerSideProps } from 'next'
import CreateJobPostForm from '../../../containers/create-job-post'
import { jobs } from '../../../data'

type EditJobPostProps = {
  job: any
}

const EditJobPost = ({ job }: EditJobPostProps) => {
  return (
    <CreateJobPostForm key='create-new-job-post' job={job} />
  )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.params
  const jobId = params.id
  const job = jobs.find(job => job.id === jobId)
  return {
    props: {
      job: job
    }
  }
}


export default EditJobPost