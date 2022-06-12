import React, { useState } from 'react'
import { Avatar, Box, Divider, HStack, useColorMode, useColorModeValue, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import AddIcon from '../../../public/assets/icons/add-white.svg'
import NotificationIcon from '../../../public/assets/icons/notification.svg'
import { CenteredIconButton } from '../../components/buttons/centered-icon-button'
import SearchBar from './header-searchbar'
import ClientsDropDown from './header-client-options'
import CreateJobPost from '../job-post/create-job-post'


const Header = () => {
	const borderBottomColor = useColorModeValue('grey', 'lightGray')
	const { isOpen, onOpen, onClose } = useDisclosure()

	const rightSideQuickActions = () => {
		return (
			<HStack>
				<CenteredIconButton
					Icon={<AddIcon />}
					onClick={onOpen}
					bg='brand.secondary'
					isRound
				/>
				<CenteredIconButton
					Icon={<NotificationIcon />}
					onClick={() => console.log('clicked')}
					borderColor='lightgrey'
					isRound
					isOutlined
				/>
				<Avatar
					w='40px'
					h='40px'
					name='Ajmal Jalal'
					src='https://bit.ly/tioluwani-kolawole'
				/>
			</HStack>
		)
	}


	// Component return
	return (
		<Box
			height='65px'
			minHeight='65px'
			width='100%'
			bg='brand.white'
			borderBottom={`1px solid ${borderBottomColor}`}
			display='flex'
			alignItems='center'
			p='0 32px'
			color='brand.black'
		>
			<ClientsDropDown />
			<Divider orientation='vertical' borderColor='brand.grey200' mx='30px' />
			<SearchBar />
			{rightSideQuickActions()}
			<CreateJobPost isOpen={isOpen} onClose={onClose} />
		</Box>
	)
}




export default Header