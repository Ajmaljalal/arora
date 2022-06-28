import { useRouter } from 'next/router'
import React from 'react'
import CreateJobPostModal from '../../../containers/create-job-post'

type Props = {}

const EditJobPost = (props: Props) => {
  const router = useRouter()

  return (
    <CreateJobPostModal key='create-new-job-post' />
  )
}

export default EditJobPost