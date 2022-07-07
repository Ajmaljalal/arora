import React from 'react'
import {
  Avatar,
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Text
} from '@chakra-ui/react'
import { candidates } from '../../data'
import RatingView from '../../components/rating/rating-view'
import ProfileHeader from './candidate-profile-header'
import ProfileBody from './candidate-profile-body'

type CandidateProps = {
  candidateId: string
  onClose: () => void
  isOpen: boolean
}

const CandidateProfile = ({ candidateId, onClose, isOpen }: CandidateProps) => {
  const candidate = candidates.find((candidate) => candidate.id === candidateId)
  if (!candidate) {
    return null
  }

  return (
    <Drawer onClose={onClose} isOpen={isOpen} size='xl' closeOnOverlayClick={false}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <ProfileHeader candidate={candidate} />
        </DrawerHeader>
        <DrawerBody>
          <ProfileBody candidate={candidate} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default CandidateProfile