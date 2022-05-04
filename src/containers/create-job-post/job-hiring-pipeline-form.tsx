import * as React from 'react';
import FormWrapper from '../../components/form/form-wrapper';
import { FormDataTypes } from './utils/objects';

export interface HiringPipelineProps {
  data: FormDataTypes
  onChange: (e) => void
}

const HiringPipelineForm = (props: HiringPipelineProps) => {
  return (
    <FormWrapper>

    </FormWrapper>

  );
}

export default HiringPipelineForm
