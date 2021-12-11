import * as React from 'react';
import { FormDataTypes } from './utils/objects';

export interface HiringPipelineProps {
  data: FormDataTypes
  onChange: (e) => void
}

const HiringPipeline = (props: HiringPipelineProps) => {
  return (
    <div>
      hiring pipline
    </div>
  );
}

export default HiringPipeline
