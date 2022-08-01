import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/react'
import React from 'react'

type AlertType = 'error' | 'success' | 'warning' | 'info'
type InlineAlertProps = {
  message: string
  title?: string
  status: AlertType
}


const alertColors = {
  error: {
    bg: 'brand.lightOrange',
    color: 'brand.orange',
  },
  success: {
    bg: 'brand.secondaryLight',
    color: 'brand.darkGreen'
  },
  warning: {
    bg: 'brand.lightYellow',
    color: 'brand.orange'
  },
  info: {
    bg: 'brand.primaryLight',
    color: 'brand.primary'
  }
}

const InlineAlert = ({ status, message, title }: InlineAlertProps) => {
  return (
    <Alert
      status={status}
      bg={alertColors[status].bg}
      color={alertColors[status].color}
      border='1px solid'
      borderColor={alertColors[status].color}
      borderRadius='4px'
      mb='10px'
    >
      <AlertIcon color={alertColors[status].color} />
      {title && <AlertTitle>{title}:</AlertTitle>}
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  )
}

export default InlineAlert