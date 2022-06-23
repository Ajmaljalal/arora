import React, { useState } from 'react';
import { RadioGroup, Stack } from '@chakra-ui/react';
import FormWrapper from '../../components/form/form-wrapper';
import RadioButton from '../../components/form/radio-button';
import { JobHiringPipelineObject } from './utils/objects';
import DropdownList from '../../components/dropdown/dropdown';
import InputField from '../../components/form/input';

export interface HiringPipelineProps {
  data: JobHiringPipelineObject
  onChange: () => void
}

const pipelines = [
  'Pipeline zero',
  'Pipeline one',
  'Pipeline three',
  'Pipeline four',
  'Pipeline Five'
]

const HiringPipelineForm = (props: HiringPipelineProps) => {
  const [radioButtonValue, setRadioButtonValue] = React.useState('selectFromPipelines')
  const [selectedItem, setselectedItem] = useState('Select a pipeline')
  const [pipelineTitle, setPipelineTitle] = useState('')

  const handleDropdownItemChange = (option: string) => {
    setselectedItem(option)
  }


  const renderRadioButtons = () => {
    return (
      <RadioGroup defaultValue={radioButtonValue} name="pipeline" colorScheme='red' ml='2px' mb='16px' onChange={(value) => setRadioButtonValue(value)}>
        <Stack spacing={20} direction='row'>
          <RadioButton value='selectFromPipelines' text='Select from saved pipelines' currentValue={radioButtonValue} />
          <RadioButton value='createNewPipeline' text='Create a new pipeline' currentValue={radioButtonValue} />
        </Stack>
      </RadioGroup>
    )
  }

  return (
    <FormWrapper>
      {renderRadioButtons()}
      {
        radioButtonValue === 'selectFromPipelines' &&
        <DropdownList
          key={selectedItem}
          selectedItem={selectedItem}
          items={pipelines}
          onSelectItem={handleDropdownItemChange}
        />
      }

      {
        radioButtonValue === 'createNewPipeline' &&
        <InputField
          value={pipelineTitle}
          label='Pipeline title'
          width='250px'
          onChange={(e) => setPipelineTitle(e.target.value)}
        />
      }
    </FormWrapper>
  );
}

export default HiringPipelineForm
