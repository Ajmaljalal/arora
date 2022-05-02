import { Box, Divider, HStack, Input, InputGroup, InputLeftAddon, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { BaseButton } from '../../components/buttons/button'
import ChevronDown from '../../../public/assets/icons/chevron-down.svg'
import SearchIcon from '../../../public/assets/icons/search.svg'
import AddIcon from '../../../public/assets/icons/add-white.svg'
import { CenteredIconButton } from '../../components/buttons/centered-icon-button'

function Header() {
	const { colorMode, toggleColorMode } = useColorMode()
	const borderBottomColor = useColorModeValue('grey', 'lightGray')
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
			<InputGroup>
				<InputLeftAddon children={<SearchIcon />} p='0' mr='10px' />
				<Input
					type='search'
					placeholder='Search Jobs, Candidates...'
					variant='unstyled'
					colorScheme='brand.black'
					_placeholder={{ color: 'brand.grey300' }}
				/>
			</InputGroup>
			<HStack>
				<CenteredIconButton Icon={<AddIcon />} onClick={() => console.log('clicked')} bg='brand.secondary' isRound />

			</HStack>

		</Box>
	)
}

export default Header