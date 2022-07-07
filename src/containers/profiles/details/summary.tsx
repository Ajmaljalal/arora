import React from 'react'
import { Box, Icon, List, VStack, Wrap } from '@chakra-ui/react'
import GreenCheckIcon from '../../../../public/assets/icons/check-circle-green-fill.svg'
import ExperiencBadge from '../../../../public/assets/icons/experience-badge.svg'
import WorkAuthBadge from '../../../../public/assets/icons/work-auth-badge.svg'
import WorkStatusBadge from '../../../../public/assets/icons/work-status-badge.svg'
import DollarBadge from '../../../../public/assets/icons/dollar-badge.svg'
import BorderedTitledBox from '../../../components/layouts/bordered-titled-box'
import CustomTag from '../../../components/tag'

type ProfileSummaryProps = {
  candidate: any
}

const Icons = {
  salary: DollarBadge,
  experience: ExperiencBadge,
  workAuth: WorkAuthBadge,
  workStatus: WorkStatusBadge,
  checkIcon: GreenCheckIcon,
  education: GreenCheckIcon
}

const skills = ['React', 'Javascript', 'CSS', 'HTML', 'NextJS', 'Redux', 'MongoDB']

const ProfileSummary = ({ candidate }: ProfileSummaryProps) => {
  const salaryExpectation = `$${candidate.minSalary} - ${candidate.maxSalary} annual salary expectation`
  const renderListItem = (text: string, icon: string, hint?: string) => {
    return (
      <Box
        key={text}
        display='flex'
        alignItems='center'
        py='8px'
      >
        <Icon as={Icons[icon]} width='25px' height='25px' mr='8px' />
        {text} {hint}
      </Box>
    )
  }

  const renderPerks = () => {
    return (
      <BorderedTitledBox title='Perks'>
        <List>
          {renderListItem(candidate.education, 'education', '')}
          {renderListItem(candidate.experience, 'experience', 'Years of Experience')}
          {renderListItem(salaryExpectation, 'salary', '',)}
          {renderListItem('US Work Authorized', 'workAuth', '',)}
          {renderListItem('Actively Looking For a Job', 'workStatus', '',)}
        </List>
      </BorderedTitledBox >

    )
  }

  const renderSkills = () => {
    return (
      <BorderedTitledBox title='Skills'>
        <Wrap mt='4px' height='100%'>
          {
            skills?.map(skill => {
              return (
                <CustomTag
                  key={skill}
                  text={skill}
                  size='sm'
                  color='brand.orange'
                  bg='brand.lightOrange'
                />
              )
            })
          }
        </Wrap>
      </BorderedTitledBox>
    )
  }
  return (
    <Box
      display='flex'
      alignItems='stretch'
      justifyContent='space-between'
      height='240px'
    >
      {renderPerks()}
      <Box w='8px' />
      {renderSkills()}
    </Box>
  )
}

export default ProfileSummary


