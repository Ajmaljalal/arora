import React, { useState } from 'react'
import { Box, Button, Input, InputGroup, InputLeftAddon, Menu, MenuButton, MenuList } from '@chakra-ui/react'
import SearchIcon from '../../../public/assets/icons/search.svg'
import ChevronDown from '../../../public/assets/icons/chevron-down.svg'
import { DropDownMenuItem } from '../../components/dropdown/dropdown-menu-item'
const searchDropDownMenutItems = [
  'Jobs',
  'Candidates',
  'Employees',
  'Recruiters'
]
const SearchBar = () => {
  const [searchOnFocus, setSearchOnFocus] = useState(false)
  const [searchDropdownOption, setSearchDropDownOption] = useState('Jobs')

  const handleSearchDropdownOptionChange = (option: string) => {
    setSearchDropDownOption(option)
  }
  const renderSearchDropdownMenu = () => {
    return (
      <Menu isLazy>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDown />}
          p='0 10px'
          background='brand.grey200'
          borderRadius='0'
          _focus={{ boxShadow: "none !important" }}
          _hover={{ background: 'brand.grey200' }}
          _expanded={{ bg: 'brand.grey200' }}
        >
          {searchDropdownOption}
        </MenuButton>
        <MenuList bg='brand.white'>
          {searchDropDownMenutItems.map(item => {
            return <DropDownMenuItem key={item} btnText={item} onSelect={handleSearchDropdownOptionChange} />
          })}
        </MenuList>
      </Menu>
    )
  }

  return (
    <InputGroup
      p='0'
      mr='50px'
      border={`1px solid ${searchOnFocus ? 'lightgrey' : 'transparent'}`}
      borderRadius='3px'
      _focus={{ border: '1px solid lightgrey', background: 'brand.grey100' }}
      _hover={{ border: '1px solid lightgrey', background: 'brand.grey100' }}
      onFocus={() => setSearchOnFocus(true)}
    >
      <InputLeftAddon
        p='0'
        bg='transparent'
        children={searchOnFocus ? renderSearchDropdownMenu() : <Box ml='10px'><SearchIcon /></Box>}
      />
      <Input
        type='search'
        placeholder='Search Jobs, Candidates...'
        variant='unstyled'
        p='0 10px'
        boxSizing='border-box'
        colorScheme='brand.black'
        _placeholder={{ color: 'brand.grey300' }}
      />
    </InputGroup>
  )
}

export default SearchBar