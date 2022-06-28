import React, { useEffect, useState } from 'react';
import { Box, Text, Wrap } from '@chakra-ui/react';
import { JobHiringPipelineObject } from './utils/objects';
import CustomTag from '../../components/tag';
import FormWrapper from '../../components/form/form-wrapper';
import DropdownList from '../../components/dropdown/dropdown';

type JobScoreCardFormProps = {
  data: JobHiringPipelineObject
  onChange: (data: JobHiringPipelineObject) => void
}

const scoreCards = [
  {
    id: "randomscorecardidone",
    name: 'Software engineer',
    criterias: [
      {
        skill: 'Interpersonal Skills',
        hint: 'Do they have good interpersonal skills?'
      },
      {
        skill: 'Communications Skills',
        hint: 'Are they able to communicate their intent in a clear, straight forward manner?'
      },
      {
        skill: 'Rejection handling',
        hint: 'When their idea is rejected how do they response?'
      },
      {
        skill: 'React Skills',
        hint: 'How is their React skills?'
      }
    ]
  },
  {
    id: "randomscorecardidtwo",
    name: 'QA Engineer',
    criterias: [
      {
        skill: 'Javascript Skills',
        hint: 'What level is their Javascript skills?'
      },
      {
        skill: 'QA Test Skills',
        hint: 'How is their QA automation test skills in general?'
      },
      {
        skill: 'Interpersonal Skills',
        hint: 'Do they have good interpersonal skills?'
      },
      {
        skill: 'Communications Skills',
        hint: 'Are they able to communicate their intent in a clear, straight forward manner?'
      },
      {
        skill: 'Rejection handling',
        hint: 'When their idea is rejected how do they response?'
      },
      {
        skill: 'React Skills',
        hint: 'How is their React skills?'
      },
    ]
  }
]


const JobScoreCardForm = ({ data, onChange }: JobScoreCardFormProps) => {
  const [selectedCardName, setSelectedCardName] = useState('')
  const [currentScoreCard, setCurrentScoreCard] = useState({ id: '', isComplete: false })
  const cardNames = scoreCards.map(card => card.name)


  useEffect(() => {
    let selectedCardName = scoreCards.filter(card => card.id === data?.id)[0]?.name
    setSelectedCardName(selectedCardName || 'Select a score card')
    setCurrentScoreCard(data)
  }, [data])

  const handleDropdownItemChange = (cardName: string) => {
    setSelectedCardName(cardName)
    const newPipeline = scoreCards.filter(card => card.name === cardName)[0]
    const formDataTemp = {
      id: newPipeline.id,
      isComplete: true
    }
    onChange(formDataTemp)
  }

  const renderCardCriteria = () => {
    const cardCriterias = scoreCards.filter(card => card.id === currentScoreCard.id)[0]?.criterias
    return (
      cardCriterias && <Wrap
        maxHeight='450px'
        overflowY='auto'
        borderRadius='8px'
        border='1px solid'
        borderColor='brand.grey200'
        p='20px'
        bg='brand.grey100'
      >
        {cardCriterias.map((criteria) => {
          return (
            <Box
              key={criteria.skill}
              border='1px solid' mt='16px'
              borderColor='brand.grey200'
              borderRadius='4px'
              p='10px'
              bg='brand.white'
            >
              <Text fontWeight='600'>{criteria.skill}</Text>
              <Text fontWeight='400' fontSize='14px' color='brand.grey500'>{criteria.hint}</Text>
            </Box>
          )
        })}
      </Wrap>
    )
  }

  return (

    <FormWrapper height='550px'>
      <Box display='flex' justifyContent='space-between' alignItems='flex-end' mb='10px' pb='10px'>
        <DropdownList
          key={selectedCardName}
          selectedItem={selectedCardName}
          items={cardNames}
          onSelectItem={handleDropdownItemChange}
        />
      </Box>
      {renderCardCriteria()}
    </FormWrapper >
  );
}

export default JobScoreCardForm
