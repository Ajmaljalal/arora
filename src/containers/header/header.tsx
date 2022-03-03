import React, { useState } from 'react'
import { Avatar, Box, Button, Divider, HStack, Input, InputGroup, InputLeftAddon, Menu, MenuButton, MenuItem, MenuList, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { BaseButton } from '../../components/buttons/button'
import ChevronDown from '../../../public/assets/icons/chevron-down.svg'
import SearchIcon from '../../../public/assets/icons/search.svg'
import AddIcon from '../../../public/assets/icons/add-white.svg'
import NotificationIcon from '../../../public/assets/icons/notification.svg'
import { CenteredIconButton } from '../../components/buttons/centered-icon-button'

function Header() {
	const { colorMode, toggleColorMode } = useColorMode()
	const borderBottomColor = useColorModeValue('grey', 'lightGray')
	const [searchOnFocus, setSearchOnFocus] = useState(false)

	const menu = (
		<Menu>
			<MenuButton as={Button} rightIcon={<ChevronDown />}>
				Actions
			</MenuButton>
			<MenuList>
				<MenuItem>Download</MenuItem>
				<MenuItem>Create a Copy</MenuItem>
				<MenuItem>Mark as Draft</MenuItem>
				<MenuItem>Delete</MenuItem>
				<MenuItem>Attend a Workshop</MenuItem>
			</MenuList>
		</Menu>
	)
	return (
		<Box
			height='72px'
			width='100%'
			bg='brand.white'
			borderBottom={`1px solid ${borderBottomColor}`}
			display='flex'
			alignItems='center'
			px='32px'
			color='brand.black'
		>
			<BaseButton
				text='Cleint: Goldman Sachs'
				color='brand.grey500'
				onClick={() => console.log('clicked')}
				outlined
				borderColor='brand.grey200'
				icon={<ChevronDown />}
				iconPosition='right'
			/>
			<Divider orientation='vertical' borderColor='brand.grey200' mx='30px' />
			<InputGroup
				mr='50px'
				border='1px solid transparent'
				borderRadius='3px'
				_hover={{ border: '1px solid lightgrey', background: 'brand.grey100' }}
			>
				<InputLeftAddon
					children={searchOnFocus ? menu : <SearchIcon />}
					p='0 10px'
				/>
				<Input
					type='search'
					placeholder='Search Jobs, Candidates...'
					variant='unstyled'
					p='0 10px'
					boxSizing='border-box'
					colorScheme='brand.black'
					_placeholder={{ color: 'brand.grey300' }}
					onFocus={() => setSearchOnFocus(true)}
				/>
			</InputGroup>
			<HStack>
				<CenteredIconButton
					Icon={<AddIcon />}
					onClick={() => console.log('clicked')}
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

		</Box>
	)
}

export default Header