import { Box, Button, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

function Header() {
	const { colorMode, toggleColorMode } = useColorMode()
	const borderBottomColor = useColorModeValue('lightgray', 'grey')
	return (
		<Box
			height='56px'
			width='100%'
			bg='brand.white'
			boxShadow='0px 1px 8px rgba(6, 10, 22, 0.08)'
		>
		</Box>
	)
}

export default Header