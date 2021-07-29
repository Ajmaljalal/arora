import React, { useState } from 'react';
import { Text, Box, RadioGroup, Stack, Wrap, position } from '@chakra-ui/react';
import FormWrapper from '../../components/form/form-wrapper';
import RadioButton from '../../components/form/radio-button';
import { JobHiringPipelineObject } from './utils/objects';
import DropdownList from '../../components/dropdown/dropdown';
import CustomTag from '../../components/tag';
import { BaseButton } from '../../components/buttons/button';

export interface HiringPipelineProps {
  data: JobHiringPipelineObject
  onChange: () => void
}

const pipelines = [
  {
    name: 'Pipeline one',
    stages: [
      {
        stageName: 'Screening',
        stageType: 'initial screening'
      },
      {
        stageName: 'Interview',
        stageType: 'Phone call'
      },
      {
        stageName: 'Interview',
        stageType: 'Technical'
      },
      {
        stageName: 'Interview',
        stageType: 'Final round'
      }
    ]
  },
  {
    name: 'Pipeline two',
    stages: [
      {
        stageName: 'Screening',
        stageType: 'initial screening'
      },
      {
        stageName: 'Interview',
        stageType: 'Phone call'
      },
      {
        stageName: 'Interview',
        stageType: 'Technical'
      },
      {
        stageName: 'Interview',
        stageType: 'Final round'
      },
      {
        stageName: 'Offer',
        stageType: 'Offer sent'
      },
      {
        stageName: 'Offer',
        stageType: 'Offer accepted'
      },
      {
        stageName: 'Offer',
        stageType: 'Offer rejected'
      },
      {
        stageName: 'Offer',
        stageType: 'Offer rejected'
      }
    ]
  }
]


const HiringPipelineForm = (props: HiringPipelineProps) => {
  const [radioButtonValue, setRadioButtonValue] = React.useState('selectFromPipelines')
  const [selectedPipeline, setSelectedPipeline] = useState('Select a pipeline')

  const pipelineNames = pipelines.map(pipeline => pipeline.name)
  const currentPipelineStages = pipelines.filter(pipeline => pipeline.name === selectedPipeline)[0]?.stages

  const handleDropdownItemChange = (option: string) => {
    setSelectedPipeline(option)
  }

  const renderPipelineStages = () => {
    const lastIndex = currentPipelineStages?.length - 1
    return currentPipelineStages && currentPipelineStages.map((stage, index) => {
      return (
        <Wrap
          key={stage.stageType + stage.stageName}
          border='1px solid' mt='16px'
          borderColor='brand.grey200'
          borderRadius='4px'
          p='10px'
          width='350px'
          spacing={4}
          position='relative'
          _after={{
            content: "''",
            display: index == lastIndex ? 'none' : 'block',
            height: '16px',
            border: '1px solid',
            borderColor: 'brand.grey300',
            position: 'absolute',
            left: '90%',
            top: '100%',
          }}
        >
          <Text fontWeight='500'>{stage.stageName}</Text>
          <CustomTag text={stage.stageType} color='brand.grey500' bg='brand.grey100' size='sm' />
        </Wrap>
      )
    })
  }

  return (

    <FormWrapper height='550px'>
      {/* {renderRadioButtons()} */}
      <Box display='flex' justifyContent='space-between' alignItems='flex-end' mb='10px' pb='10px'>
        <DropdownList
          key={selectedPipeline}
          selectedItem={selectedPipeline}
          items={pipelineNames}
          onSelectItem={handleDropdownItemChange}
        />
      </Box>
      {/* {
        radioButtonValue === 'createNewPipeline' &&
        <InputField
          value={pipelineTitle}
          label='Pipeline title'
          width='250px'
          onChange={(e) => setPipelineTitle(e.target.value)}
        />
      } */}
      <Box height='400px' overflowY='auto'>
        {renderPipelineStages()}
      </Box>
    </FormWrapper>
  );
}

export default HiringPipelineForm
