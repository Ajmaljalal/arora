import React from 'react'
import { HStack, Text } from '@chakra-ui/react'
import TrashIcon from '../../../public/assets/icons/trash-empty.svg'
import EditIcon from '../../../public/assets/icons/edit-green.svg'

type BorderedListItemProps = {
  text: string
  editable?: boolean
  bg?: string
  bordered?: boolean
  number?: number
  onDelete?: (text: string) => void
  onEdit?: (text: string) => void
}

const BorderedListItem = ({ text, number, bg, editable = true, bordered = true, onDelete, onEdit }: BorderedListItemProps) => {

  const deleteItem = () => {
    onDelete(text)
  }
  const editItem = () => {
    onEdit(text)
  }
  return (
    <HStack
      key={text}
      p='10px 16px'
      border={bordered ? '1px solid' : 'none'}
      borderColor='brand.grey300'
      borderRadius='4px'
      mb='8px'
      cursor='pointer'
      display='flex'
      justifyContent='space-between'
      alignItems='flex-start'
      spacing={3}
      bg={bg ? bg : 'brand.grey100'}
    >
      <Text flex={1}>{number ? number + '.' : ''} {text}</Text>
      {editable && <HStack>
        <EditIcon onClick={editItem} />
        <TrashIcon onClick={deleteItem} />
      </HStack>}
    </HStack>
  )
}

export default BorderedListItem