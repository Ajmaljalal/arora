import { Box, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

function Header() {
	const { colorMode, toggleColorMode } = useColorMode()
	const borderBottomColor = useColorModeValue('grey', 'lightGray')
	return (
		<Box
			height='56px'
			width='100%'
			bg='brand.white'
			borderBottom={`1px solid ${borderBottomColor}`}
		>
		</Box>
	)
}

export default Header