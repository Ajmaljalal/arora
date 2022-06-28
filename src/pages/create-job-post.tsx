import { Box, Input, useDisclosure } from '@chakra-ui/react'
import Head from 'next/head'
import React, { useState } from 'react'
import BodyLayout from '../components/layouts/body/body-layout'
import CreateJobPostModal from '../containers/create-job-post'

type CreateJobPostProps = {}

const CreateJobPost = ({ }: CreateJobPostProps) => {

  return (
    <Box>
      <CreateJobPostModal key='create-new-job-post' />
    </Box>
  )
}

export default CreateJobPost
