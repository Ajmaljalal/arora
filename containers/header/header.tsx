import { Box, Button, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

function Header() {
	const { colorMode, toggleColorMode } = useColorMode()
	const borderBottomColor = useColorModeValue('lightgray', 'grey')
	return (
		<Box
			height='56px'
			borderBottom={`0.5px solid ${borderBottomColor}`}
		>
			<Button onClick={toggleColorMode}>Dark</Button>
		</Box>
	)
}

export default Header