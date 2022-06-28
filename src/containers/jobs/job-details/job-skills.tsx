import { Wrap } from '@chakra-ui/react'
import React from 'react'
import CustomTag from '../../../components/tag'

type JobSkillsProps = {
  skills: string[]
}

const JobSkills = ({ skills }: JobSkillsProps) => {
  return (
    <Wrap>
      {skills?.map((skill: string) => {
        return (
          <CustomTag
            key={skill}
            text={skill}
            color='brand.primary'
            bg='brand.primaryLight' />
        )
      })}
    </Wrap>
  )
}

export default JobSkills