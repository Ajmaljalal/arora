import { Heading } from '@chakra-ui/react'
import React from 'react'

type PageTitleProps = {
  text: string
}

const PageTitle = ({ text }: PageTitleProps) => {
  return (
    <Heading
      as='h1'
      fontSize='24px'
      fontWeight='700'
    >
      {text}
    </Heading>
  )
}

export default PageTitle