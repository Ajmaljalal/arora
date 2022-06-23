import React from 'react'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react'

type CustomAccordionProps = {
  title: string
  content: JSX.Element
}

const CustomAccordion = ({ title, content }: CustomAccordionProps) => {
  return (
    <Accordion
      allowToggle
      key={title}
      border='1px solid' mt='16px'
      borderColor='brand.grey200'
      borderRadius='4px'
      _focus={{ boxShadow: 'none' }}
    >
      <AccordionItem border='none' >
        <AccordionButton _hover={{ bg: 'none' }} _focus={{ shadow: 'none' }}>
          <Box flex='1' textAlign='left'>
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          {content}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default CustomAccordion