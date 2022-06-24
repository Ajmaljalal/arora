import React, { useEffect, useState } from 'react';
import { Box, Text, Wrap } from '@chakra-ui/react';
import { JobHiringPipelineObject } from './utils/objects';
import CustomTag from '../../components/tag';
import FormWrapper from '../../components/form/form-wrapper';
import DropdownList from '../../components/dropdown/dropdown';

export interface HiringPipelineProps {
  data: JobHiringPipelineObject
  onChange: (data: JobHiringPipelineObject) => void
}

const pipelines = [
  {
    id: "randomepipelineid1",
    name: 'Software engineer',
    stages: [
      {
        name: 'Applied',
        type: 'initial screening'
      },
      {
        name: 'Screening',
        type: 'initial screening'
      },
      {
        name: 'Interview',
        type: 'Phone call'
      },
      {
        name: 'Interview',
        type: 'Technical'
      },
      {
        name: 'Interview',
        type: 'Final round'
      }
    ]
  },
  {
    id: "randomepipelineid2",
    name: 'QA Engineer',
    stages: [
      {
        name: 'Screening',
        type: 'initial screening'
      },
      {
        name: 'Interview',
        type: 'Phone call'
      },
      {
        name: 'Interview',
        type: 'Technical'
      },
      {
        name: 'Interview',
        type: 'Final round'
      },
      {
        name: 'Offer',
        type: 'Offer sent'
      },
      {
        name: 'Offer',
        type: 'Offer accepted'
      },
      {
        name: 'Offer',
        type: 'Offer rejected'
      }
    ]
  }
]


const HiringPipelineForm = ({ data, onChange }: HiringPipelineProps) => {
  const [selectedPipelineName, setSelectedPipelineName] = useState('')
  const [currentPipeline, setCurrentPipeline] = useState({ id: '', isComplete: false })
  const pipelineNames = pipelines.map(pipeline => pipeline.name)


  useEffect(() => {
    let selectedPipelineName = pipelines.filter(pipeline => pipeline.id === data?.id)[0]?.name
    setSelectedPipelineName(selectedPipelineName || 'Select a pipeline')
    setCurrentPipeline(data)
  }, [data])

  const handleDropdownItemChange = (pipelineName: string) => {
    setSelectedPipelineName(pipelineName)
    const newPipeline = pipelines.filter(pipeline => pipeline.name === pipelineName)[0]
    const formDataTemp = {
      id: newPipeline.id,
      isComplete: true
    }
    onChange(formDataTemp)
  }

  const renderPipelineStages = () => {
    const pipelineStages = pipelines.filter(pipeline => pipeline.id === currentPipeline.id)[0]?.stages
    return (
      pipelineStages && <Wrap
        maxHeight='450px'
        overflowY='auto'
        borderRadius='8px'
        border='1px solid'
        borderColor='brand.grey200'
        p='20px'
        bg='brand.grey100'
      >
        {pipelineStages.map((stage) => {
          return (
            <Wrap
              key={stage.type + stage.name}
              border='1px solid' mt='16px'
              borderColor='brand.grey200'
              borderRadius='4px'
              p='10px'
              width='290px'
              spacing={4}
              position='relative'
              bg='brand.white'
            >
              <Text fontWeight='500'>{stage.name}</Text>
              <CustomTag text={stage.type} color='brand.grey500' bg='brand.grey100' size='sm' />
            </Wrap>
          )
        })}
      </Wrap>
    )
  }

  return (

    <FormWrapper height='550px'>
      <Box display='flex' justifyContent='space-between' alignItems='flex-end' mb='10px' pb='10px'>
        <DropdownList
          key={selectedPipelineName}
          selectedItem={selectedPipelineName}
          items={pipelineNames}
          onSelectItem={handleDropdownItemChange}
        />
      </Box>
      {renderPipelineStages()}
    </FormWrapper >
  );
}

export default HiringPipelineForm
