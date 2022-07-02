import React, { ReactElement } from 'react'
import { GetServerSideProps } from 'next'
import CreateJobPostForm from '../../containers/create-job-post'

type CreateJobPostProps = {
}

const CreateJobPost = ({ }: CreateJobPostProps) => {
  return (
    <CreateJobPostForm key='create-new-job-post' />
  )
}

CreateJobPost.getLayout = function getLayout(page: ReactElement) {
  return page
}

export default CreateJobPost
