import React from 'react'
import { Box, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, ModalProps } from '@chakra-ui/react'
import TileWithHeader from '../../components/tiles/tile-with-header'
import CloseIcon from '../../../public/assets/icons/close.svg'
import { BaseButton } from '../../components/buttons/button'
import JobPostSteps from './job-post-steps'

type CreateJobPostProps = {
} & Omit<ModalProps, 'children'>

const CreateJobPost = ({ isOpen, onClose }: CreateJobPostProps) => {
  const renderJobSummary = () => {
    return (
      <Box>
        Summary
      </Box>)
  }

  const renderCloseBtn = () => {
    return (
      <Box onClick={onClose}>
        <CloseIcon />
      </Box>
    )
  }
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size='full'
    >
      <ModalOverlay />
      <ModalContent h='100%' color='brand.black' bg='bran.white'>
        <ModalHeader bg='brand.white' borderBottom='1px solid' borderColor='brand.grey200'>Post a job</ModalHeader>
        <ModalCloseButton />
        <ModalBody bg='brand.white' pt='20px'>
          <HStack>
            <JobPostSteps />
          </HStack>
        </ModalBody>
        <ModalFooter bg='brand.white' p='50px 100px'>
          <HStack spacing={4}>
            <BaseButton text='Cancel' outlined={true} onClick={onClose} borderColor='brand.primary' color='brand.primary' />
            <BaseButton text='Next' onClick={onClose} color='brand.white' bg='brand.primary' />
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default CreateJobPost